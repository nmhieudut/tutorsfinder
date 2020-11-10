import React, { useState, useEffect } from "react";
import { Table, Tag, Modal } from "antd";
import NeedsServices from "../../../../api/NeedsServices";
import "./needs.css";

export default function NeedsComponents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("data", data);

  useEffect(() => {
    try {
      const fetchNeeds = async () => {
        setData(await NeedsServices.getAllNeeds());
        setLoading(false);
      };
      fetchNeeds();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const info = (schedule) => {
    Modal.info({
      title: "Schedule",
      content: (
        <div className="info-schedule-list">
          {schedule.length > 0
            ? schedule.map((item, index) => (
                <div key={index} className="info-modal">
                  <div className="info-modal-title">
                    <p>{item.day.toUpperCase()}</p>
                  </div>
                  <div className="info-modal-time">
                    <p>{item.lesson}</p>
                  </div>
                </div>
              ))
            : "No data"}
        </div>
      ),
      onOk() {},
    });
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User",
      dataIndex: "nameUser",
      key: "nameUser",
    },
    {
      title: "Grade",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject ",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule",
      render: (schedule) => (
        <div>
          {" "}
          <a onClick={() => info(schedule)}>View schedule</a>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color;
        const activeStatus = status ? "ACCEPTED" : "PENDING...";
        if (activeStatus === "ACCEPTED") {
          color = "#6d4c41";
        } else color = "#039be5";
        return (
          <Tag color={color} key={activeStatus}>
            {activeStatus}
          </Tag>
        );
      },
    },
    {
      title: "Tuition",
      dataIndex: "tuition",
      key: "tuition",
      render: (tuition) => <div>{tuition} VND</div>,
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(record) => `${record.id}`}
      />
    </>
  );
}
