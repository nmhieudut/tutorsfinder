import React from 'react'
import './index.css'
import { Layout } from 'antd';
import SideBar from './SideBar'
import HeaderNav from './HeaderNav'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Students from '../users/Students'
import Tutors from '../users/Tutors'
import Dashboard from '../dashboard'

const { Header, Footer, Content, Sider } = Layout;

export default function index() {
    return (
        <div>
            <Router>
                <Layout>
                    <Header style={{ padding: 0, width: '100%', backgroundColor: 'white' }}>
                        <HeaderNav />
                    </Header>
                    <Layout>
                        <Sider theme="light">
                            <SideBar />
                        </Sider>
                        <Content>
                            <div className="site-layout-content">
                                <Switch>
                                    <Route path="/" exact component={Dashboard} />
                                    <Route path="/tutors" exact component={Tutors} />
                                    <Route path="/students" exact component={Students} />
                                    <Route path="/tutors/:id" exact component={Tutors} />
                                    <Route path="/students/:id" exact component={Students} />
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </Router>
        </div>
    )
}
