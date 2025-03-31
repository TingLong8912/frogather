import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { SearchResult } from 'components/SearchResult';
import { Button, Tooltip} from 'antd';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams);
    const names = [];
    const descriptions = [];
    const images = [];
  
    // 遍历所有的 name、description、img 参数，并获取其值
    for (let i = 1; i <= 7; i++) {
      const nameParam = `name${i}`;
      const descriptionParam = `description${i}`;
      const imgParam = `img${i}`;
  
      const nameValue = queryParams.get(nameParam);
      const descriptionValue = queryParams.get(descriptionParam);
      const imgValue = queryParams.get(imgParam);
  
      if (nameValue) {
        names.push(nameValue);
      }
      if (descriptionValue) {
        descriptions.push(descriptionValue);
      }
      if (imgValue) {
        images.push(imgValue);
      }
    }
    // console.log(names);
    // console.log(descriptions);
    // console.log(images);
    const [ hashtagTypes, setHashtagTypes ] = useState([]);
    const handleHashtage = (index) => {
        if (hashtagTypes.includes(index)) {
            setHashtagTypes(hashtagTypes.filter(item => item !== index));
          } 
        else {
            setHashtagTypes([index]);
          }
    };

    const onClick = () => {
        navigate('/search');
    };

    return(
        <div>
         <h4 style={{paddingLeft: '10vh',paddingTop: '3vh',marginBottom: '-5vh'}}>以下為搜尋結果</h4>
         {names.length === 0 ? (
            <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:"-2vh 0"}}>sorry 資料庫目前並無資料</h2>
            ) : (
            names.map((name, index) => (
                <div style={{ margin: '2vh 5vh' }}>
                <SearchResult
                    key={index}
                    className={hashtagTypes.includes(index) ? 'active' : ''}
                    onClick={() => handleHashtage(index)}
                    text={name}
                    description={descriptions[index]}
                    photo={images[index]}
                />
                </div>
            ))
            )}

            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end",marginBottom:"4vh"}}>
                <Tooltip title="點擊重新查詢" >
                <Button type="primary" onClick={onClick}  style={{width: "64px", height: "30px"}}>
                    返回
                </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export { Result }