import { Card } from "antd";
import styled from "styled-components";
import './cardstyle.css';

const MyCard = styled(Card)`
  width: 100%;
  height: 50vh;
  font-size: 20px; 
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


const ProblemCard = ({ className, onClick, photo, problemtext, answertext, ans, flipped}) => {
  return (
      <MyCard
          className={`${className} card ${flipped ? 'flipped' : ''}`}
          onClick={onClick}
      >
          <div className={`card ${flipped ? 'front' : 'back'}`}>
              <div className="front">
                  <img
                      src={photo}
                      alt="frog"
                      style={{ width: "50%", height: "60%", objectFit: "cover"}} />
                  <br />{problemtext}
              </div>
              <div className={`back ${ans ? 'ans' : 'nans'}`} style={{fontSize: "17px", marginTop: "-5%"}}>
                  {answertext}
              </div>
          </div>
      </MyCard>
      );
    };

export { ProblemCard }



