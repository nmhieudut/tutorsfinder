import React from "react";
import SubjectsList from "./SubjectsList";
import { Typography } from "antd";

const { Title } = Typography;
export default function Subjects() {
  return (
    <div>
      <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        <Title level={2}>Subjects</Title>
      </div>
      <SubjectsList />
    </div>
  );
}
