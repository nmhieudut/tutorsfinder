import React from "react";
import DevicesComponents from "../../features/main/components/Devices";
import { Typography } from "antd";

const { Title } = Typography;
export default function Devices() {
  return (
    <div>
      <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        <Title level={2}>Devices</Title>
      </div>
      <DevicesComponents />
    </div>
  );
}
