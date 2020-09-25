import React, { useState } from "react";
import UsersList from "./UsersList";
import UsersCreate from "./UsersCreate";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

const { Title } = Typography;

function Users() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

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
        }}
      >
        <div style={{ flex: 1, padding: "10px", textAlign: "left" }}>
          <Title level={2}>Users</Title>
        </div>
        <div style={{ flex: 1, padding: "30px", textAlign: "right" }}>
          <Button type="primary" onClick={showDrawer}>
            <UserAddOutlined /> New account
          </Button>
        </div>
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
