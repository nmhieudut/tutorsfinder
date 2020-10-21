import React, { useState } from "react";
import moment from "moment";
import {
  Drawer,
  Form,
  Button,
  Input,
  Radio,
  InputNumber,
  DatePicker,
  Select,
  notification,
} from "antd";
import UsersServices from "../../../api/UsersServices";
import { useHistory } from "react-router-dom";

const { Option } = Select;

function UsersCreate(props) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dateFormat = "YYYY/MM/DD";

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };
  const onCreate = (createdUser) => {
    setLoading(true);
    UsersServices.createUser(createdUser)
      .then((res) => {
        setLoading(false);
        openNotificationWithIcon(
          "success",
          "Success!",
          "Register successfully"
        );
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch((err) => {
        setLoading(false);
        openNotificationWithIcon("error", "Error!", err);
      });
  };
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
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
  const onFinish = (values) => {
    const createdUser = {
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      gender: values.gender,
      introduction: values.introduction,
      phoneNumber: values.phoneNumber,
      dateOfBirth: moment(values.dateOfBirth, "YYYY/M/D"),
      authority: values.authority,
    };
    onCreate(createdUser);
  };

  return (
    <div>
      <Drawer
        title="Create a new account"
        width={640}
        onClose={props.onClose}
        visible={props.visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          validateMessages={validateMessages}
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
            rules={[{ min: 3, required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ min: 3, required: true }]}
          >
            <Input.Password />
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
              <Radio value={1}>Male</Radio>
              <Radio value={0}>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="authority" label="Role">
            <Select style={{ width: 120 }}>
              <Option value="ROLE_TUTOR">Tutor</Option>
              <Option value="ROLE_ADMIN">Admin</Option>
              <Option value="ROLE_STUDENT">Student</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ type: "number", min: 0, max: 100, required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Birthday"
            rules={[{ required: true }]}
          >
            <DatePicker format={dateFormat} />
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
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
              loading={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
export default React.memo(UsersCreate);
