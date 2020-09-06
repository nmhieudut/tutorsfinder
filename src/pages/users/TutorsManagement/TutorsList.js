import React, { useState } from "react";
import Tutors from "../../../features/tutorsData/components";
import TutorsCreate from "./TutorsCreate";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

const { Title } = Typography;

export default function TutorsList() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div style={{ padding: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1, padding: "30px", textAlign: "left" }}>
          <Title level={2}>Tutors</Title>
        </div>
        <div style={{ flex: 1, padding: "30px", textAlign: "right" }}>
          <Button type="primary" onClick={showDrawer}>
            <PlusOutlined /> New account
          </Button>
        </div>
      </div>
      <div>
        <Tutors />
      </div>
      <TutorsCreate
        visible={visible}
        showDrawer={showDrawer}
        onClose={onClose}
      />
    </div>
  );
}
