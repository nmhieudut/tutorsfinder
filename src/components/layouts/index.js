import React from 'react'
import './index.css'
import { Layout, Breadcrumb } from 'antd';
import SideBar from './SideBar'
const { Header, Footer, Content, Sider } = Layout;

export default function index() {
    return (
        <div>
            <Layout>
                <Sider theme="light" width="230px"><SideBar /></Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">Content</div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
