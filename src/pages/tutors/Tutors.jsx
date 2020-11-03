import React from "react";
import TutorsComponents from "../../features/main/components/Tutors/components";
import { Typography } from "antd";

const { Title } = Typography;
export default function Tutors() {
  return (
    <div>
      <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        <Title level={2}>Tutors</Title>
      </div>
      <TutorsComponents />
    </div>
  );
}
