import { Button } from "antd";
import styled from 'styled-components';

const CustomizedButton = styled(Button)`
  background: rgb(238, 238, 238);
  color: #666666;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  > * {
    font-size: medium;
  }
`;

const ActionButton = ({ icon, onClickEvent }) => {
  return (
    <CustomizedButton className="material-icons-round" shape="circle" onClick={onClickEvent}>
      {icon}
    </CustomizedButton>
  );
}

export { ActionButton }