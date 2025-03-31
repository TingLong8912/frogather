import { OptionCard } from 'components/OptionCard';
import styled from 'styled-components';
import { Divider, Button, Tooltip,  message} from 'antd';
import { useState } from 'react';
import { BsStar, BsStarHalf, BsStarFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OptionCardRow = styled.div`
  display: flex;
  justifyContent: space-between;
  align-items: center;
  gap: 2.5rem;
  padding: 8rem 4rem;
  height: 50vh;
`;

const Game = (props) => {
    const [ hashtagTypes, setHashtagTypes ] = useState([]);
    const navigate = useNavigate();
    const handleHashtage = (index) => {
        if (hashtagTypes.includes(index)) {
            setHashtagTypes(hashtagTypes.filter(item => item !== index));
          } 
        else {
            setHashtagTypes([index]);
          }
    };
    const onClick = () => {
        if (hashtagTypes.length === 0) {
            message.error("請選擇遊戲難度");
        }
        else{
          navigate('/problem', { state: { hashtagTypes } });
        }     
    };
    return (
        <div style={{ ...props.contentStyle}}>
            <div style={{ textAlign: "center" ,lineHeight: "0.3" ,paddingTop: "10vh" ,marginBottom: "-10vh"}}>
                <h1>歡迎來到青蛙知識王</h1><br />
                <p>快來測驗看看自己是不是青蛙小達人吧！別忘了登錄帳號能夠累積分數喔～</p><br />
                <Divider style={{ margin: '5vh 0'}} />
                <h2 style={{marginTop: "6vh"}}>請選擇遊戲難度</h2>
            </div>
            <OptionCardRow>
              <OptionCard 
                className={(hashtagTypes.includes(1))? "active": ""}
                onClick={() => handleHashtage(1)}
                icon={<BsStar />}
                text={"簡單"}
              />
              <OptionCard 
                className={(hashtagTypes.includes(2))? "active": ""}
                onClick={() => handleHashtage(2)}
                icon={<BsStarHalf />}
                text={"中等"}
              />
              <OptionCard 
                className={(hashtagTypes.includes(3))? "active": ""}
                onClick={() => handleHashtage(3)}
                icon={<BsStarFill />}
                text={"困難"}
              />
            </OptionCardRow>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
                <Tooltip title="點擊開始遊戲" >
                    <Button type="primary" onClick={onClick} style={{width: "64px", height: "30px"}}>
                        開始
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
  };
  
  export { Game }