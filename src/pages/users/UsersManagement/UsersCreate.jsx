import React, { useState } from "react";
import moment from "moment";
import {
  Drawer,
  Form,
  Button,
  Input,
  Radio,
  InputNumber,
  Upload,
  DatePicker,
  message,
  Select,
  notification,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { createUserAction } from "../../../features/userData/actions";
import { useDispatch, useSelector } from "react-redux";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
const { Option } = Select;

function UsersCreate(props) {
  const [loadingImg, setLoadingImg] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  //redux + hooks
  const createLoading = useSelector((state) => state.usersReducers.createLoading);
  const success = useSelector((state) => state.usersReducers.success);
  const error = useSelector((state) => state.usersReducers.error);
  const dispatch = useDispatch();
  const dateFormat = "YYYY/MM/DD";

  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      duration: 2,
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
    console.log(values);
    const createdUser = {
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      gender: values.gender,
      photo: imageUrl,
      introduction: values.introduction,
      phoneNumber: values.phoneNumber,
      dateOfBirth: moment(values.dateOfBirth, "YYYY/M/D"),
      authority: values.authority,
    };
    dispatch(createUserAction(createdUser));
    console.log("created:", createdUser);
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoadingImg(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoadingImg(false);
      });
    }
  };
  const uploadButton = (
    <div>
      {loadingImg ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div>
      {success === "CREATE" &&
        openNotificationWithIcon(
          "success",
          "Success!",
          "Register successfully"
        )}
      {error === "CREATE" &&
        openNotificationWithIcon("error", "Error!", "Register failed")}
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
            name="photo"
            label="Image profile"
            rules={[{ required: true }]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
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
              disable={createLoading ? 1 : 0}
              loading={createLoading ? 1 : 0}
            >
              {createLoading ? "Registering..." : "Register"}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
export default React.memo(UsersCreate);
