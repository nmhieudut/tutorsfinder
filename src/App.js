import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Sider from './components/Sider'
import './App.css';
import { Layout,Menu, Switch } from 'antd';

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
