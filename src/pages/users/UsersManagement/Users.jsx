import React, { useState } from "react";
import UsersList from "./UsersList";
import UsersCreate from "./UsersCreate";
import {
  UserAddOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Typography, Input, Space } from "antd";

const { Title } = Typography;

function Users() {
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const showDrawer = () => {
    setVisible(true);
  };
  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onClose = () => {
    setVisible(false);
  };
  const onReload = () => {
    window.location.reload();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
          <Title level={2}>Users</Title>
        </div>
        <div style={{ flex: 1, padding: "20px", textAlign: "right" }}>
          <Button type="primary" onClick={showDrawer}>
            <UserAddOutlined /> New account
          </Button>
        </div>
      </div>
      <div
        style={{
          flex: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingBottom: 15,
          paddingLeft: 10,
        }}
      >
        <Space>
          <Input
            style={{ width: 500 }}
            placeholder="search something..."
            suffix={suffix}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="primary" onClick={onReload} icon={<ReloadOutlined />}>
            Reload
          </Button>
        </Space>
      </div>
      <div style={{ padding: 10 }}>
        <UsersList searchTerm={searchTerm} />
      </div>

      <UsersCreate
        visible={visible}
        showDrawer={showDrawer}
        onClose={onClose}
      />
    </>
  );
}
export default Users;
