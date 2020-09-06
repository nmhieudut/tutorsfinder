import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Dropdown, Card, Button, Badge, List, Input } from 'antd';
import { DownOutlined, LogoutOutlined, NotificationOutlined, AudioOutlined } from '@ant-design/icons';
import avatar from '../assets/avatar.jpg'
import './index.css'

const { Meta } = Card;
const { Search } = Input;
export default function HeaderNav() {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const profileOverlay = (
        <div>
            <Card style={{ width: 300, height: 'auto', borderWidth: 1 }}>
                <Meta
                    avatar={<Avatar src={avatar} />}
                    title="Hieu Nguyen"
                    description="Administrator"
                />
                <div style={{ textAlign: 'center', margin: 25, padding: 10 }}>
                    <p>Death is like the wind, always by my side</p>
                    <Button type="primary" shape="round" icon={<LogoutOutlined />} size="medium">
                        Log Out
                    </Button>
                </div>
            </Card>
        </div>
    )
    const notificationsList = (item) => {
        return (
            <List.Item>
                <List.Item.Meta
                    title={item.title}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            </List.Item> 
        )
    } 
    const notificationOverLay = (
        <div style={{ minWidth: '500px', backgroundColor: 'white' }}>
            <List
                bordered={true}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={notificationsList}
            />
        </div>
    )
    return (
        <div className="header-layout">
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to='/' target="_top">
                    <img src="https://blog.flamingtext.com/blog/2020/08/21/flamingtext_com_1597992772_270036763.png" height="23px" width="150px" border="0" alt="" />
                </Link>
            </div>
            <div style={{ flex: 4, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 40 }}>
                    <Search
                        placeholder="search something..."
                        enterButton="Search"
                        suffix={suffix}
                        onSearch={value => console.log(value)}
                    />
                </div>
            </div>
            <div style={{ flex: 6, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ margin: '0 30px' }}>
                    <Dropdown overlay={notificationOverLay}>
                        <Badge count={data.length} size="small" style={{ fontSize: '14px' }}>
                            <NotificationOutlined style={{ fontSize: '20px', color: '#08c' }} />
                        </Badge>
                    </Dropdown>
                </div>
                <Avatar src={avatar} />
                <Dropdown overlay={profileOverlay}>
                    <Link target="_blank" rel="noopener noreferrer" to="/" onClick={e => e.preventDefault()}>
                        <DownOutlined />
                    </Link>
                </Dropdown>,
            </div>
        </div>
    )
}
