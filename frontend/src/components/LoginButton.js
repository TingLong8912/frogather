import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { theme } from 'antd';

const MyDiv = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const { useToken } = theme;


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { token } = useToken();

  return (
    !isAuthenticated && (
      <>
        <MyDiv>還沒帳號？</MyDiv>
        <MyDiv 
          onClick={() => loginWithRedirect()}
          style={{ background: token.colorPrimary, color: "#ffffff"}}
        >
          登入
        </MyDiv>
      </>
    )
  );
};

export default LoginButton;