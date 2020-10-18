import React, { useEffect, useState } from "react";
import moment from "moment";
import { Form, Input, Button, Radio, DatePicker, notification } from "antd";
import { SendOutlined } from "@ant-design/icons";
import UsersServices from "../../../api/UsersServices";
import { useHistory } from "react-router-dom";

function UsersUpdate(props) {
  //console.log("param:", props.match.params.id)
  const dateFormat = "YYYY/MM/DD";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const _id = props.match.params.id;
  useEffect(() => {
    UsersServices.getDetailUser(_id)
      .then((res) => {
        setData(res[0].data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, [props.match.params.id]);

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
  const onUpdate = (id, updatedUser) => {
    setLoading(true);
    UsersServices.updateUser(id, updatedUser)
      .then((res) => {
        setLoading(false);
        openNotificationWithIcon("success", "Success!", "Update successfully");
        setTimeout(() => history.push("/home/users"), 2000);
      })
      .catch((err) => {
        openNotificationWithIcon("error", "Error!", "Update failed");
        setLoading(false);
      });
  };
  const onFinish = (values) => {
    console.log(values);
    const updatedUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      gender: values.gender === "male" ? 1 : 0,
      introduction: values.introduction,
      phoneNumber: values.phoneNumber,
      dateOfBirth: moment(values.dateOfBirth, "YYYY/M/D"),
    };
    onUpdate(data.id, updatedUser);
  };
  return (
    <div>
      {data && (
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            gender: data.gender ? "male" : "female",
            dateOfBirth: moment(data.dateOfBirth, "MMM Do YY"),
            phoneNumber: data.phoneNumber,
            address: data.address,
            introduction: data.introduction,
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
export default UsersUpdate;
