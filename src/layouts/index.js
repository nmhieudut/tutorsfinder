import React, { useState } from 'react'
import './index.css'
import { Layout, BackTop } from 'antd';
import SideBar from './SideBar'
import HeaderNav from './HeaderNav'
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import StudentsList from '../pages/users/StudentsManagement/StudentsList'
import TutorsList from '../pages/users/TutorsManagement/TutorsList'
import TutorsUpdate from '../pages/users/TutorsManagement/TutorsUpdate'
import StudentsUpdate from '../pages/users/StudentsManagement/StudentsUpdate'
import Dashboard from '../pages/dashboard'

const { Header, Footer, Content, Sider } = Layout;

export default function Layouts() {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    }
    return (
        <div>
            <Router>
                <Layout>
                    <Header style={{ padding: 0, width: '100%', backgroundColor: 'white' }}>
                        <HeaderNav />
                    </Header>
                    <Layout>
                        <Sider
                            className="sider-layout"
                            breakpoint="lg"
                            collapsible
                            collapsed={collapsed}
                            onCollapse={onCollapse}
                            theme="light">
                            <SideBar />
                        </Sider>
                        <Content>
                            <div className="site-layout-content">
                                <Switch>
                                    <Route path="/" exact component={Dashboard} />
                                    <Route path="/tutors" exact component={TutorsList} />
                                    <Route path="/students" exact component={StudentsList} />
                                    <Route path="/tutors/:id/edit" exact component={TutorsUpdate} />
                                    <Route path="/students/:id/edit" exact component={StudentsUpdate} />
                                </Switch>
                                <BackTop>
                                    <div className='back-top-button'><VerticalAlignTopOutlined /></div>
                                </BackTop>
                            </div>
                        </Content>
                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>Hieu US/UK ©2020 Created by Hieu Hoa Hong</Footer>
                </Layout>
            </Router>
        </div>
    )
}
