import React, { useState, useEffect } from "react";
import TutorsServices from "../../../../../api/TutorsServices";
import { Table, Modal } from "antd";
import "./tutors.modules.css";
export default function TutorsComponents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      setData(await TutorsServices.getAllTutors());
      setLoading(false);
    };
    fetchTutors();
  }, []);
  function info(user) {
    Modal.info({
      title: "Detail",
      content: (
        <div className="detail-modal">
          <p>Email: {user.email}</p>
          <p>Gender : {user.gender ? "Male" : "Female"}</p>
          <p>Phone: {user.phoneNumber}</p>
          <p>Address: {user.address}</p>
          <p>Introduction: {user.introduction}</p>
        </div>
      ),
      onOk() {},
    });
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => (
        <div>
          {user.firstName + " " + user.lastName}{" "}
          <a onClick={() => info(user)}>View Detail</a>
        </div>
      ),
    },
    {
      title: "Efficency",
      dataIndex: "efficency",
      key: "efficency",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (subject) => (
        <div>
          {subject.length > 0
            ? subject.map((item, index) => <p key={index}>{item}</p>)
            : "No data"}
        </div>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        bordered
        loading={loading}
        dataSource={data}
        rowKey={(record) => `${record.id}`}
      />
    </>
  );
}
