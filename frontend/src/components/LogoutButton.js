import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { theme, message } from 'antd';

const MyDiv = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const { useToken } = theme;

const LogoutButton = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const { token } = useToken();

  const myLogoutFunction = async () => {
    await logout();
    message.success("🐸：下次再進站")
  } 
  return (
    isAuthenticated && (
      <>
        <MyDiv>{user.given_name} 您好！</MyDiv>
        <MyDiv 
          onClick={myLogoutFunction} 
          style={{ background: token.colorPrimary, color: "#ffffff"}}
        >
          登出
        </MyDiv>
      </>
    )
  );
};

export default LogoutButton;
