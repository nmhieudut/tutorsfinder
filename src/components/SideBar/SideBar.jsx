import React from "react";
import {
  DashboardOutlined,
  UserOutlined,
  FormOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

export default function SideBar() {
  return (
    <div className="sidebar-layout-content">
      <Menu mode="inline" theme="light" style={{ height: "100%" }}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/home/dashboard">Dashboard</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Management">
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/home/users">Users</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<FormOutlined />}>
          Feedback
        </Menu.Item>
      </Menu>
    </div>
  );
}
