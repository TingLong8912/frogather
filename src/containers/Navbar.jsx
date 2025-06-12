import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Dropdown } from 'antd';
import styled from 'styled-components';
import { BsPersonFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from 'components/LoginButton';
import LogoutButton from 'components/LogoutButton';
import { UserImg } from "components/UserImg";
const { Header } = Layout;
const { SubMenu } = Menu;

const CustomizedHeader = styled(Header)`
  position: absolute;
  top: 20px;
  height: 30px;
  width: 100%;
  padding-inline: 50px;
  line-height: 64px;
  background: transparent !important;
  align-items: center;
  justify-content: space-between;
  display: flex;
  z-index: 99;
  & .ant-menu{
    backgroundColor: #ffffff70;
    backdropFilter: blur(5px);
    height: 100%;
    font-size: small;
    font-weight: 700;
  }
  & .ant-menu-item, .ant-menu-submenu-title{
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
const navTitleStyle = {
  width: "max-content",
  minWidth: "170px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  fontSize: "large",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
}
const navItemsStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "medium",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "50%",
}
const subitemsStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const menuStyle = {
  height: "30px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
  paddingInline: "10px",
}



const navLabelItems = {
  "": "主畫面",
  "educate": "教育",
  "record": "紀錄",
  "contact": "關於我們",
  "foundation": "贊助我們",
}

const educate = [
  {
    label: (
      <div>
        <Link to={"/game"}>青蛙知識王</Link>
      </div>
    ),
    key: '2',
  },
  {
    label: (
      <div>
        <Link to={"/search"}>青蛙小百科</Link>
      </div>
    ),
    key: '3',
  }
];

const navItems = ['', 'educate', 'record', 'contact', 'foundation'].map((key) => {
  if (key === 'educate') {
    return {
      key,
      label: (
        <SubMenu key={key} title={navLabelItems[key]} style={subitemsStyle}>
          {educate.map(item => (
            <Menu.Item key={item.key} >{item.label}</Menu.Item>
          ))}
        </SubMenu>
      ),
    };
  }
  return {
    key,
    label: <Link to={"/"+key}>{navLabelItems[key]}</Link>,
  };
});


const loginItems = [
  {
    label: (
      
      <> 
        <LoginButton />
        <LogoutButton />
      </>
    ),
    key: '0',
  },
 
];
  

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <CustomizedHeader theme="light">
      <div style={navTitleStyle}>
        FroGather
      </div>
      <div style={{display: "flex", width: "40%"}}>
        <Menu 
          theme="light" 
          mode="horizontal" 
          defaultSelectedKeys={['']} 
          items={navItems} 
          style={menuStyle}
        />      
        <Dropdown
          menu={{
            items: loginItems
          }}
        >
          <Button shape="circle" style={navItemsStyle}>
            { isAuthenticated && 
              <UserImg width={"30px"}/>
            }
            { !isAuthenticated && 
              <BsPersonFill /> 
            }
          </Button>
        </Dropdown>
      </div>
    </CustomizedHeader>
  )
};

export { Navbar }