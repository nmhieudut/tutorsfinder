import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Card, Button, Badge, List } from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import avatar from "../../assets/avatar.jpg";
import "../../layouts/index.css";
const { Meta } = Card;

export default function HeaderNav() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
  ];

  const logOut = () => {
    localStorage.clear();
  };
  const profileOverlay = (
    <div>
      <Card style={{ width: 300, height: "auto", borderWidth: 1 }}>
        <Meta
          avatar={<Avatar src={avatar} />}
          title="Hieu Nguyen"
          description="Administrator"
        />
        <div style={{ textAlign: "center", margin: 25, padding: 10 }}>
          <p>Death is like the wind, always by my side</p>

          <Link to="/login" target="_top" style={{ color: "white" }}>
            <Button
              type="primary"
              shape="round"
              icon={<LogoutOutlined />}
              size="medium"
              onClick={logOut}
            >
              Log Out
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
  const notificationsList = (item) => {
    return (
      <List.Item>
        <List.Item.Meta
          title={item.title}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );
  };
  const notificationOverLay = (
    <div style={{ minWidth: "500px", backgroundColor: "white" }}>
      <List
        bordered={true}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={notificationsList}
      />
    </div>
  );
  return (
    <div className="header-layout">
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        <div
          style={{
            margin: "0 30px",
            padding: "0 30px",
            borderBottom: 0,
          }}
        >
          <Dropdown overlay={notificationOverLay}>
            <Badge
              count={data.length}
              size="small"
              style={{ fontSize: "14px" }}
            >
              <NotificationOutlined
                style={{ fontSize: "20px", color: "#08c" }}
              />
            </Badge>
          </Dropdown>
        </div>
        <div style={{}}>
          <Dropdown overlay={profileOverlay}>
            <div style={{ cursor: "pointer" }}>
              <Avatar src={avatar} />
              <span style={{ margin: 10 }}>Hieu Nguyen</span>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="/"
                onClick={(e) => e.preventDefault()}
              >
                <DownOutlined />
              </Link>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
