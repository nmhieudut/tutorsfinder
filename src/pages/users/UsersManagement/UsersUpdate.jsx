import React, { useEffect } from "react";
import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  DatePicker,
  message,
  Select,
  notification,
} from "antd";
import {
  loadDetailUserAction,
  updateUserAction,
} from "../../../features/userData/actions";
import { SendOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

function UsersUpdate(props) {
  //console.log("param:", props.match.params.id)
  //redux + hooks
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersReducers.data);
  const loading = useSelector((state) => state.usersReducers.loading);
  const updateLoading = useSelector(
    (state) => state.usersReducers.updateLoading
  );
  const success = useSelector((state) => state.usersReducers.success);
  const error = useSelector((state) => state.usersReducers.error);
  console.log("data", data);

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
    if (data) {
      dispatch(updateUserAction(data.id, updatedUser));
      if (success === "UPDATE") {
        openNotificationWithIcon("success", "Success!", "Update successfully");
      } else {
        openNotificationWithIcon("error", "Error!", "Update failed");
      }
    }
  };
  return (
    <div>
      {/* {success === "UPDATE" &&
        openNotificationWithIcon("success", "Success!", "Update successfully")}
      {error === "UPDATE" &&
        openNotificationWithIcon("error", "Error!", "Update failed")} */}
      {!loading && data && (
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
              disable={updateLoading ? 1 : 0}
              loading={updateLoading}
            >
              <SendOutlined />
              {updateLoading ? "Saving..." : "Save"}
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}
export default React.memo(UsersUpdate);
