import React, { useState, useEffect } from "react";
import devicesServices from "../../../../api/devices";
import { Table, Tag, Space, Button, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import android from "../../../../assets/android.png";
import ios from "../../../../assets/ios.png";
export default function DevicesComponents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchDevices = async () => {
        const res = await devicesServices.getAllDevices();
        setData(res);
        setLoading(false);
      };
      fetchDevices();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Device UUID",
      dataIndex: "device_uuid",
      key: "device_uuid",
      render: (device_uuid) => <>{device_uuid}</>,
    },
    {
      title: "Platform",
      key: "platform",
      dataIndex: "platform",
      render: (platform) => (
        <>
          <img
            src={platform === "Android" ? android : ios}
            width="60px"
            height="40px"
          />
        </>
      ),
    },
    {
      title: "Version",
      key: "version",
      dataIndex: "version",
      render: (version) => <>{version}</>,
    },
  ];

  return (
    <>
      {!loading && (
        <Table
          columns={columns}
          loading={loading}
          dataSource={data}
          rowKey={(record) => `${record.id}`}
        />
      )}
    </>
  );
}
