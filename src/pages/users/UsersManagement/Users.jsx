import React, { useState } from "react";
import UsersList from "./UsersList";
import UsersCreate from "./UsersCreate";
import { UserAddOutlined, AudioOutlined } from "@ant-design/icons";
import { Button, Typography, Input } from "antd";

const { Title } = Typography;
const { Search } = Input;
function Users() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
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
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Search
          style={{ width: 500 }}
          placeholder="search something..."
          enterButton="Search"
          suffix={suffix}
          onSearch={(value) => console.log(value)}
        />
      </div>
      <UsersList />
      <UsersCreate
        visible={visible}
        showDrawer={showDrawer}
        onClose={onClose}
      />
    </div>
  );
}
export default Users;
