import React, { useEffect, useState } from "react";
import Details from "../../../pages/users/Details";
import { Link } from "react-router-dom";
import { Table, Space, Button, Tag } from "antd";
import moment from "moment";
import {
  FolderViewOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadDataAction, deleteTutorAction } from "../actions";

function Tutors() {
  //local state
  const [selectedUser, setSelectedUser] = useState([]);
  const [visible, setVisible] = useState(false);

  //Hooks
  const dispatch = useDispatch();

  //State redux
  const data = useSelector((state) => state.tutorsReducer.data);
  const loading = useSelector((state) => state.tutorsReducer.loading);
  console.log("data", data);

  const loadData = () => {
    dispatch(loadDataAction());
  };
  //Load data effect
  useEffect(loadData, []);

  const onSelect = (item) => {
    setSelectedUser(item);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onDelete = (id) => {
    dispatch(deleteTutorAction(id));
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
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (age) => `${age}`,
      sorter: {
        compare: (a, b) => a.age - b.age,
        multiple: 3,
      },
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let activeStatus = status ? "ACTIVE" : "INACTIVE";
        let color = "green";
        if (activeStatus === "INACTIVE") {
          color = "volcano";
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
          <Link target="_top" to={`/tutors/${record.id}/edit`}>
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
        </Space>
      ),
    },
  ];
  return (
    <>
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

export default React.memo(Tutors);
