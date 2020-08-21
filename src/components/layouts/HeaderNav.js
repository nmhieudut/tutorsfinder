import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Dropdown, Card, Button } from 'antd';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import avatar from '../../assets/avatar.jpg'
import './index.css'

const { Meta } = Card;

export default function HeaderNav() {

    const profileOverlay = (
        <div>
            <Card style={{ width: 300, height: 200, padding: 30 }}>
                <Meta
                    avatar={<Avatar src={avatar} />}
                    title="Hieu Nguyen"
                    description="Death is like the wind, always by my side"
                />
                <div style={{ textAlign: 'center', marginTop: 15 }}>
                    <Button type="primary" shape="round" icon={<LogoutOutlined />} size="medium">
                        Log Out
                    </Button>
                </div>
            </Card>
        </div>
    )

    return (
        <div className="header-layout">
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://blog.flamingtext.com/blog/2020/08/21/flamingtext_com_1597992772_270036763.png" height="23px" width="150px" border="0" alt="" />
            </div>
            <div style={{ flex: 8, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
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
