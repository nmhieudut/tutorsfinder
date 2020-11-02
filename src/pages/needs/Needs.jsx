import React from "react";
import NeedsComponents from "../../features/main/components/Needs";
import { Typography } from "antd";

const { Title } = Typography;
export default function Needs() {
  return (
    <div>
      <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        <Title level={2}>Needs</Title>
      </div>
      <NeedsComponents />
    </div>
  );
}
