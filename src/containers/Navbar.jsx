import { useAuth0 } from "@auth0/auth0-react";
import { Button, Dropdown, Layout, Menu } from 'antd';
import LoginButton from 'components/LoginButton';
import LogoutButton from 'components/LogoutButton';
import { UserImg } from "components/UserImg";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const { Header } = Layout;
const { SubMenu } = Menu;

const CustomizedHeader = styled(Header)`
  position: absolute;
  top: 20px;
  height: 40px;
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
  & .ant-menu-item, & .ant-menu-submenu {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  & .ant-menu-submenu-title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
  borderRadius: "30px",
  textDecoration: "none",
  color: "black",
  '&:hover': {
    color: "rgba(0, 0, 0, 0.29)",
    transitionDuration: "0.3s",
  }
}
const navItemsStyle = {
  width: "40px",
  height: "40px",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "medium",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "50%",
}
const subitemsStyle = {
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const menuStyle = {
  height: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "30px",
  paddingInline: "10px",
}

const navLabelItems = {
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

const navItems = ['educate', 'record', 'contact', 'foundation'].map((key) => {
  if (key === 'educate') {
    return {
      key,
      label: navLabelItems[key],
      children: educate,
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
      <a href="/" style={navTitleStyle}>
        FroGather
      </a>
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

export { Navbar };
