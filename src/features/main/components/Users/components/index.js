import React, { useEffect, useState } from "react";
import Details from "../../../../../pages/users/Details";
import { Link } from "react-router-dom";
import DeleteButton from "../../../../../components/DeleteButton";
import { Table, Space, Button, Tag, notification } from "antd";
import * as moment from "moment";
import {
  FolderViewOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import UsersServices from "../../../../../api/UsersServices";
import useDebounce from "../../../../../hooks/useDebounce";
function Users(props) {
  //local state
  const [selectedUser, setSelectedUser] = useState([]);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchTerm = props.searchTerm;
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const loadData = () => {
    UsersServices.getUsers()
      .then((res) => {
        setData(res[0].data);
        setLoading(false);
        setResult(res[0].data);
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);
  useEffect(() => {
    if (debouncedSearchTerm) {
      const items = data.filter(
        (item) =>
          item.username.toLowerCase().includes(debouncedSearchTerm) ||
          item.email.toLowerCase().includes(debouncedSearchTerm)
      );
      return setResult(items);
    }
    return setResult(data);
  }, [debouncedSearchTerm, data]);

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
  const onToggleStatus = (id, status) => {
    setLoading(true);
    UsersServices.changeStatus(id, status)
      .then((res) => {
        openNotificationWithIcon(
          "success",
          "Success!",
          `This user is now ${status}`
        );
        setLoading(false);
        loadData();
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  const onDelete = (id) => {
    setLoading(true);
    UsersServices.deleteUser(id)
      .then((res) => {
        setLoading(false);
        openNotificationWithIcon(
          "success",
          "Success!",
          "This user doesn't exist anymore !"
        );
        loadData();
      })
      .catch((err) => {
        setLoading(false);
        openNotificationWithIcon("error", "Error!", "Deleted failed");
        loadData();
      });
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
      sorter: {
        compare: (a, b) => a.username.length - b.username.length,
      },
      render: (username) => <div>{username}</div>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => `${email}`,
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (phoneNumber) => `${phoneNumber ? phoneNumber : "None"}`,
    },
    {
      title: "Birthday",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (dateOfBirth) => `${moment(dateOfBirth).format("L")}`,
    },
    {
      title: "Role",
      dataIndex: "authority",
      key: "authority",
      render: (authority) => {
        let color = "green";
        const activeStatus =
          authority === "ROLE_ADMIN"
            ? "ADMIN"
            : authority === "ROLE_TUTOR"
            ? "TUTOR"
            : "STUDENT";
        if (activeStatus === "ADMIN") {
          color = "#f44336";
        } else if (activeStatus === "TUTOR") {
          color = "#0288d1";
        } else color = "#ffc400";
        return (
          <Tag color={color} key={activeStatus}>
            {activeStatus.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color;
        const activeStatus =
          status === "INACTIVE" ? "INACTIVE" : status === "ACTIVE" && "ACTIVE";
        if (activeStatus === "INACTIVE") {
          color = "#6d4c41";
        } else color = "#ff5722";
        return (
          <Tag color={color} key={activeStatus}>
            {activeStatus}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      responsive: ["lg"],
      render: (record) =>
        record.authority !== "ROLE_ADMIN" ? (
          <Space size="small">
            <Button
              icon={<FolderViewOutlined />}
              onClick={() => onSelect(record)}
            ></Button>
            <Link target="_top" to={`/home/users/${record.id}/edit`}>
              <Button type="primary" icon={<EditOutlined />} />
            </Link>
            <DeleteButton
              loading={loading}
              item={record}
              onSelected={(id) => {
                onDelete(id);
              }}
            />
          </Space>
        ) : (
          <Space size="small">
            <Button
              icon={<FolderViewOutlined />}
              onClick={() => onSelect(record)}
            />
            <Button disabled type="primary" icon={<EditOutlined />} />
            <Button danger disabled type="primary" icon={<DeleteOutlined />} />
          </Space>
        ),
    },
    {
      title: "Activate / Deactivate",
      key: "Activate / Deactivate",
      align: "center",
      responsive: ["lg"],
      render: (record) => (
        <Button
          loading={loading}
          disabled={loading}
          style={{
            backgroundColor:
              record.status === "INACTIVE" ? "#4caf50" : "#263238",
            color: "white",
            marginHorizontal: 50,
          }}
          onClick={() => {
            const status = record.status === "INACTIVE" ? "ACTIVE" : "INACTIVE";
            onToggleStatus(record.id, status);
          }}
        >
          {record.status === "INACTIVE" ? "ACTIVATE" : "DEACTIVATE"}
        </Button>
      ),
    },
  ];
  return (
    <>
      <Table
        loading={loading}
        dataSource={result}
        columns={columns}
        size="small"
        rowKey={(record) => `${record.id}`}
      />
      <Details user={selectedUser} visible={visible} onClose={onClose} />
    </>
  );
}

export default Users;
