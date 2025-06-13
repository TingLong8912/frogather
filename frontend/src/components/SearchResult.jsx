import React from 'react';
import { Card } from "antd";
import styled from "styled-components";

const MyCard = styled(Card)`
  width: 100%;
  font-size: xx-small; 
  border-color: #D9D9D9;
  color: rgb(102, 102, 102);
  &:hover{
    color: #161616;
    outline: 1px solid #161616;
  }
  &.active{
    color: rgb(98, 109, 75);
    outline: 1.5px solid rgb(98, 109, 75);
  }
  &>div{
    text-align: center;
    fontWeight: 400;
    margin: 10px 0;
  }
  & .anticon{
    font-size: x-large;
    height: 40px;
  }
`;

const SearchResult = ({ className, onClick, photo, text, description }) => {
  return (
    <MyCard
      className={className}
      onClick={onClick}
    >
      <div style={{ display: 'flex', flexDirection: 'space-between', alignItems: 'center', gap: '9vh', margin:"0 5vh"}}>
        <img
        src={photo}
        alt="frog"
        style={{ width: "175px", height: "175px", objectFit: "cover"}} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,width:"80%"}}>
            <div style={{ fontSize: '4vh' }}>{text}</div>"
            <div style={{ fontSize: '2vh' }}>{description}</div>
        </div>
      </div>
    </MyCard>
  );
};

export { SearchResult }
