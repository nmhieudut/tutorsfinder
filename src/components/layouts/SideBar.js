import React from 'react'
import {
    AuditOutlined,
    DashboardOutlined,
    UserOutlined,
    CalendarOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function SideBar({ props }) {

    return (
        <div className="sidebar-layout-content">
            <Menu
                defaultSelectedKeys={['1']}
                mode='inline'
                theme='dark'
                style={{ height: "100%" }}
            >
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<CalendarOutlined />}>
                    Navigation Two
                    </Menu.Item>
                <SubMenu key="sub1" icon={<AuditOutlined />} title="Teachers">
                    <Menu.Item key="3"><Link to='/tutors'>List</Link></Menu.Item>

                    <Menu.Item key="4">Management</Menu.Item>
                    {/* <SubMenu key="sub1-2" title="Submenu">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu> */}
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Students">
                    <Menu.Item key="7"><Link to='/students'>List</Link></Menu.Item>
                    <Menu.Item key="8">Management</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}
