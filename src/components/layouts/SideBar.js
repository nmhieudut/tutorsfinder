import React from 'react'
import {
    DashboardOutlined,
    UserOutlined,
    CalendarOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function SideBar() {

    return (
        <div className="sidebar-layout-content">
            <Menu
                mode='inline'
                theme='dark'
                style={{ height: "100%" }}>
                <Menu.Item key="1" icon={<DashboardOutlined />} >
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<CalendarOutlined />} >
                    Navigation Two
                    </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Management">
                    <Menu.Item key="3"><Link to='/tutors'>Tutors</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/students'>Students</Link></Menu.Item>
                    {/* <SubMenu key="sub1-2" title="Submenu">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu> */}
                </SubMenu>
            </Menu>
        </div>
    );
}
