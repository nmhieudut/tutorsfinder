import React from "react";
import FeedbacksComponents from "../../features/main/components/Feedbacks";
import { Typography } from "antd";

const { Title } = Typography;
export default function Feedbacks() {
  return (
    <div>
      <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        <Title level={2}>Feedbacks</Title>
      </div>
      <FeedbacksComponents />
    </div>
  );
}
