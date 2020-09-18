import React, { useEffect, useState } from "react";
import Details from "../../../pages/users/Details";
import { Link } from "react-router-dom";
import { Table, Space, Button, Tag, notification } from "antd";
import * as moment from "moment";
import {
  FolderViewOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadDataAction, deleteUserAction } from "../actions";

function Users() {
  console.log("Loaded");
  //local state
  const [selectedUser, setSelectedUser] = useState([]);
  const [visible, setVisible] = useState(false);

  //Hooks
  const dispatch = useDispatch();

  //State redux
  const data = useSelector((state) => state.usersReducers.data);
  const loading = useSelector((state) => state.usersReducers.loading);
  const success = useSelector((state) => state.usersReducers.success);
  const error = useSelector((state) => state.usersReducers.error);
  console.log("data", data);

  const loadData = () => {
    dispatch(loadDataAction());
  };
  //Load data effect
  useEffect(loadData, []);

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };
  const onSelect = (item) => {
    setSelectedUser(item);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onDelete = (id) => {
    dispatch(deleteUserAction(id));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => `${id}`,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (username) => <div>{username}</div>,
      sorter: {
        compare: (a, b) => a.username.length - b.username.length,
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => `${gender ? "Male" : "Female"}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => `${email}`,
    },
    {
      title: "Created Date",
      dataIndex: "creationDate",
      key: "creationDate",
      render: (creationDate) => `${moment(creationDate).format("MMM Do YY")}`,
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (phoneNumber) => `${phoneNumber}`,
    },
    {
      title: "Role",
      dataIndex: "authority",
      key: "authority",
      render: (authority) => {
        let color = "green";
        const activeStatus = authority ? "ADMIN" : "TUTOR";
        if (activeStatus === "ADMIN") {
          color = "red";
        } else if (activeStatus === "TUTOR") {
          color = "#0288d1";
        }
        return (
          <Tag color={color} key={activeStatus}>
            {activeStatus.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      responsive: ["lg"],
      render: (record) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<FolderViewOutlined />}
            onClick={() => onSelect(record)}
          >
            More
          </Button>
          <Link target="_top" to={`/home/users/${record.id}/edit`}>
            <Button icon={<EditOutlined />}>Edit</Button>
          </Link>
          <Button
            danger
            icon={<DeleteOutlined />}
            type="primary"
            onClick={() => {
              onDelete(record.id);
            }}
          >
            Delete
          </Button>
          <Button style={{ backgroundColor: "#1976d2", color: "white" }}>
            {record.activation ? "Active" : "Inactive"}
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      {success === "DELETE" &&
        openNotificationWithIcon("success", "Success!", "Remove successfully")}
      {error && openNotificationWithIcon("error", "Error!", "Remove failed")}
      <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        size="small"
        bordered
      />
      <Details user={selectedUser} visible={visible} onClose={onClose} />
    </>
  );
}

export default React.memo(Users);
