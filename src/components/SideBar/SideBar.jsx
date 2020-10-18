import React, { useState } from "react";
import {
  DashboardOutlined,
  UserOutlined,
  FormOutlined,
  UnorderedListOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "../../layouts/index.css";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";

const { SubMenu } = Menu;

export default function SideBar(props) {
  const location = useLocation();
  const path = location.pathname;
  const [selectedKey, setSelectedKey] = useState(
    path === "/home/dashboard"
      ? 1
      : path === "/home/users"
      ? 2
      : path === "/home/subjects" && 3
  );
  const handleClick = (e) => {
    setSelectedKey(e.key);
  };
  return (
    <>
      <div
        style={{
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/" target="_top">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={logo} height="50px" width="50px" border="0" alt="" />
          </div>
        </Link>
      </div>

      <Menu
        style={{ marginTop: 60 }}
        className="sidebar-layout-content"
        mode="inline"
        theme="dark"
        onClick={handleClick}
        defaultSelectedKeys={[selectedKey + ""]}
        defaultOpenKeys={["sub1"]}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/home/dashboard">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Management">
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/home/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SnippetsOutlined />}>
            <Link to="/home/subjects">Subjects</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="4" icon={<FormOutlined />}>
          Feedback
        </Menu.Item>
      </Menu>
    </>
  );
}
