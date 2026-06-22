import { EnvironmentFilled, ExceptionOutlined, GlobalOutlined, PushpinFilled } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { AutoComplete, Button, Form, Input, message, Modal, Pagination } from 'antd';
import Frog from "assets/frog.json";
import Spot from "assets/scenic_spot_C_f.json";
import { OptionCard } from 'components/OptionCard';
import MapContext from 'hook/MapContext';
import { toLonLat } from 'ol/proj';
import { useContext, useEffect, useState } from 'react';
import { FiAlertTriangle, FiCrosshair, FiHash, FiMap, FiMinusCircle } from "react-icons/fi";
import styled from 'styled-components';
import { createRecord, getReverseGeocoding } from '../../../../axios';

const coordTextStyle = {
  fontWeight: "400", 
  fontSize: "xx-small", 
  margin: "0 3px",
  color: "rgb(150, 150, 150)"
}
const speciesDataSource = 
  Frog["species"].map((item, index)=>{
    return {
      "key": index,
      "value": item.name,
      "label": item.name
    }
  });
const spotDataSource =
  Spot["XML_Head"]["Infos"]["Info"]?.map((item, index)=>{
    var lat_and_lon = Math.round(item.Py*100)/100 + ", " + Math.round(item.Px*100)/100;
    return {
      "key": index,
      "value": item.Name,
      "label": <>{item.Name}<span style={coordTextStyle}>{lat_and_lon}</span></>
    }
  });
const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;

const SubText = styled.div`
  font-weight: 400;
  font-size: xx-small; 
  margin: 10px 0;
  color: rgb(102, 102, 102);
`;

const OptionCardRow = styled.div`
  display: flex;
  margin: 1rem 0;
  justifyContent: space-between;
  gap: 0.5rem;
`;

const UpdateRecordModal = ({ isUpdateRecordModalOpen, setIsUpdateRecordModalOpen, setRecords }) => {
  const { map, setCenter, setZoom, setIsDraw, userCoord, setUserCoord } = useContext(MapContext);
  const [ userPlaceName, setUserPlaceName ] = useState([]);
  const [ modalPage, setModelPage ] = useState(1);
  const [ hashtagTypes, setHashtagTypes ] = useState([]);
  const [ locationType, setLocationType ] = useState("");
  const [ recordType, setRecordType ] = useState("public");
  const [ speciesOptions, setSpeciesOptions ] = useState(speciesDataSource);
  const [ locationOptions, setLocationOptions ] = useState([]);
  const [ form ] = Form.useForm();
  const { user } = useAuth0();

  useEffect(() => {
    if (userCoord) {
      var lat_and_lon = toLonLat(userCoord);
      const fetchData = async () => {
        const result = await getReverseGeocoding(lat_and_lon[1], lat_and_lon[0]);
        setUserPlaceName(result)
      }
      fetchData();
      form.setFieldValue("placeCoord", lat_and_lon);
    }
	}, [userCoord]);


  useEffect(() => {
    if (userPlaceName) {
      var lat_and_lon = toLonLat(userCoord);
      lat_and_lon = Math.round(lat_and_lon[0]*100)/100 + ", " + Math.round(lat_and_lon[1]*100)/100;
      const options = userPlaceName.map((place, index)=>{
        return {
          "key": index,
          "value": place,
          "label": <>{place}<span style={coordTextStyle}>{lat_and_lon}</span></>
        }
      });
      if (options.length > 0) {
        setLocationOptions([options[0], options[1], options[2]]); 
      }
    }
  }, [userPlaceName]);

  useEffect(() => {
    if (recordType === "public") {
      form.setFieldValue("isAuthPulic", true);
    } else {
      form.setFieldValue("isAuthPulic", false);
    }
  }, [recordType]);
  
  /* HANDLE MODAL */
  const handleCancel = () => {
    setIsUpdateRecordModalOpen(false);
  };

  /* SPECIES DROPDOWN */
  const onSpeciesSearch = (val) => {
    let filtered = [];
    if (val) {
      filtered = speciesDataSource.filter(
        ({value}) => value.includes(val)
      );
    }
    setSpeciesOptions(filtered);
  };

  const onSpeciesSelect = (val) => {
    form.setFieldValue("speciesName", val);
  };

  /* LOCATION DROPDOWN */
  const onLocationSearch = (val) => {
    let filtered = [];
    if (val) {
      filtered = spotDataSource.filter(
        ({value}) => value.includes(val)
      );
    };
    setLocationOptions(filtered);
  };

  const handleLocation = () => {
    setLocationType("user");
    map.getLayers().forEach((layer) => {
      if (layer.get('name') === 'userlocation') {
        try {
          let coord = layer.getSource().getFeatures()[0].getGeometry()?.getCoordinates();
          setCenter(coord);
          setUserCoord(coord);
          setZoom(14);
          message.success("地圖已縮放到您所在位置");
        } catch(e) {

        }
      }
    })
  };

  const handleDraw = () => {
    setLocationType("draw");
    handleCancel();
    setIsDraw(true);
  };

  const handleHashtage = (index) => {
    if (hashtagTypes.includes(index)){
      var temp = [...hashtagTypes];
      var array_index = temp.indexOf(index);
      if (array_index > -1) temp.splice(array_index, 1); 
      setHashtagTypes(temp);
    } else {
      setHashtagTypes([...hashtagTypes, index]);
    }
  };

  useEffect(() => {
    form.setFieldValue("hashtag", hashtagTypes);
  }, [hashtagTypes]);

  /* HANDLE FORM SUMBIT */
  const onFinish = async (values) => {
    message.success("💪🐸：感謝您的貢獻");
    const data = await createRecord(values);
    setRecords(data);
    setIsUpdateRecordModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    message.error("🐸💧：請再次確認您填寫的內容");
  };

  return (
    <Modal 
      title="回報紀錄" 
      open={isUpdateRecordModalOpen} 
      onCancel={handleCancel}
      footer={null}
      bodyStyle={{minHeight: 150}}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{span: 24,}}
        wrapperCol={{span: 24,}}
        initialValues={{
          userName: user?.name,
          isAuthPulic: true,
          placeCoord: userCoord,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
         <div style={{display: (modalPage === 1)? "block": "none"}}>
          <Form.Item
            label="分類"
            name="hashtag"
          >
            <OptionCardRow>
              <OptionCard 
                className={(hashtagTypes.includes(1))? "active": ""}
                onClick={() => handleHashtage(1)}
                icon={<FiMap />}
                text={"蛙調"}
              />
              <OptionCard 
                className={(hashtagTypes.includes(2))? "active": ""}
                onClick={() => handleHashtage(2)}
                icon={<FiAlertTriangle />}
                text={"待移除"}
              />
              <OptionCard 
                className={(hashtagTypes.includes(3))? "active": ""}
                onClick={() => handleHashtage(3)}
                icon={<FiMinusCircle />}
                text={"移除"}
              />
            </OptionCardRow>
            <OptionCardRow>
              <OptionCard
                className={(hashtagTypes.includes(4))? "active": ""}
                onClick={() => handleHashtage(4)}
                icon={<FiCrosshair />}
                text={"詢問"}
              />
              <OptionCard
                className={(hashtagTypes.includes(0))? "active": ""}
                onClick={() => handleHashtage(0)}
                icon={<FiHash />}
                text={"其他"}
              />
            </OptionCardRow>
          </Form.Item>
        </div>

        <div style={{display: (modalPage === 2)? "block": "none"}}>
          <Form.Item
            label="物種"
            name="speciesName"
            rules={[
              {
                required: true,
                message: '請輸入您所發現的物種!',
              },
            ]}
          >
            <AutoComplete
              options={speciesOptions}
              onSearch={onSpeciesSearch}
              onSelect={onSpeciesSelect}
            >
              <Input />
            </AutoComplete>
            <SubText>🐸：不知道我是誰？</SubText>
          </Form.Item>
          {/* <Form.Item
            name="animalPhoto"   
          >
            <SubText>您可以上傳拍攝到的動物圖片</SubText>
            <ImageUpload />
          </Form.Item> */}
        </div>

        <div style={{display: (modalPage === 3)? "block": "none"}}>
          <Form.Item
            label={"發現地點"}
            name="placeCoord"
            rules={[
              {
                required: true,
                message: '請開啟定位取得您所在坐標位置或由地圖上繪製地點!',
              },
            ]}
          >
            <SubText>您發現物種之地點坐標</SubText>
            <OptionCardRow>
              <OptionCard 
                className={(locationType === "user")? "active": ""}
                onClick={handleLocation}
                icon={<EnvironmentFilled />}
                text={"參考您目前所在位置"}
              />
              <OptionCard 
                className={(locationType === "draw")? "active": ""}
                onClick={handleDraw}
                icon={<PushpinFilled />}
                text={"在地圖上繪製您所在地"}
              />
            </OptionCardRow>
          </Form.Item>
          <SubText>您發現物種之地點名稱</SubText>
          <Form.Item
            name="placeName"
            rules={[
              {
                required: true,
                message: '請輸入您發現物種之地點名稱!',
              },
            ]}
            
          >
            <AutoComplete
              options={locationOptions}
              onSearch={onLocationSearch}
            >
              <Input />
            </AutoComplete>
          </Form.Item>
        </div>

        <Form.Item
          label="您的名字"
          name="userName"
          style={{display: (modalPage === 4)? "block": "none"}}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="有什麼想說的..."
          name="context"
          style={{display: (modalPage === 4)? "block": "none"}}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="分享對象"
          name="isAuthPulic"
          style={{display: (modalPage === 5)? "block": "none"}}     
          rules={[
            {
              required: true,
              message: '請選擇分享對象!',
            },
          ]}
        >
          <OptionCardRow>
            <OptionCard 
              className={(recordType === "public")? "active": ""} 
              onClick={()=>setRecordType("public")}
              icon={<GlobalOutlined />}
              text={"公開顯示發現紀錄、地點與貼文給所有人"}
            />
            <OptionCard 
              className={(recordType === "private")? "active": ""} 
              onClick={()=>setRecordType("private")}
              icon={<ExceptionOutlined />}
              text={"僅顯示發現紀錄、地點與貼文給志工團隊"}
            />
          </OptionCardRow>
        </Form.Item>
          
        <ModalFooter>
          <Pagination simple 
            defaultCurrent={modalPage} 
            total={50} 
            onChange={(page) => {setModelPage(page)}}
            style={{width: "100%", position: "relative"}}
          />
          <Form.Item
            style={{display: (modalPage === 5)? "block": "none", width: "100%"}}
          >
            <Button type="primary" htmlType="submit" style={{height: "40px", marginInlineStart: "8px"}}>
              送出
            </Button>
          </Form.Item>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export { UpdateRecordModal };
