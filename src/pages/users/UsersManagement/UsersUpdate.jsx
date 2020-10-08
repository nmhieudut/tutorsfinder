import React, { useState, useEffect } from "react";
import moment from "moment";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Upload,
  DatePicker,
  message,
  Select,
  notification,
} from "antd";
import { loadDetailUserAction } from "../../../features/userData/actions";
import { SendOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

function UsersUpdate(props) {
  //console.log("param:", props.match.params.id)
  //redux + hooks
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersReducers.data);
  const loading = useSelector((state) => state.usersReducers.loading);
  const success = useSelector((state) => state.usersReducers.success);
  const error = useSelector((state) => state.usersReducers.error);
  console.log(data);

  useEffect(() => {
    dispatch(loadDetailUserAction(props.match.params.id));
  }, []);

  const dateFormat = "YYYY/MM/DD";
  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  function handleRoleChange(value) {
    console.log(`selected ${value}`);
  }
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      {success === "UPDATE" &&
        openNotificationWithIcon("success", "Success!", "Update successfully")}
      {error === "UPDATE" &&
        openNotificationWithIcon("error", "Error!", "Update failed")}
      {!loading && (
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            gender: data.gender ? "male" : "female",
            photo: data.photo,
            dateOfBirth: moment(data.dateOfBirth, "MMM Do YY"),
            phoneNumber: data.phoneNumber,
            address: data.address,
            introduction: data.introduction,
            authority: data.authority,
          }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label="User Name"
            rules={[{ min: 8, required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Birthday"
            rules={[{ required: true }]}
          >
            <DatePicker
              onChange={(e) => console.log(e._d)}
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone"
            rules={[
              { message: "Please input your phone number!", required: true },
            ]}
          >
            <Input addonBefore="(+84)" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="introduction" label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="authority" label="Role">
            <Select style={{ width: 120 }} onChange={handleRoleChange}>
              <Option value="ROLE_USER">User</Option>
              <Option value="ROLE_ADMIN">Admin</Option>
              <Option value="ROLE_STUDENT">Student</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              disable={loading ? 1 : 0}
              loading={loading}
            >
              <SendOutlined />
              {loading ? "Saving..." : "Save"}
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}
export default React.memo(UsersUpdate);
