import React, { useState } from "react";
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
  notification,
  Space,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { createTutorAction } from "../../../features/tutorsData/actions";
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

export default function TutorsCreate(props) {
  const [loadingImg, setLoadingImg] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const loading = useSelector((state) => state.tutorsReducer.loading);
  const data = useSelector((state) => state.tutorsReducer.data);
  const error = useSelector((state) => state.tutorsReducer.error);
  const dispatch = useDispatch();

  const dateFormat = "YYYY/MM/DD";

  const openNotificationWithIcon = (type, error) => {
    notification[type]({
      message: type.toUpperCase(),
      description: error,
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
      dateOfBirth: values.dateOfBirth,
    };
    dispatch(createTutorAction(createdUser));
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
      {loadingImg ? <loadingImgOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
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
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ min: 8, required: true }]}
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
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
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
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button
              type="primary"
              htmlType="submit"
              disable={loading}
              loading={loading}
            >
              {loading ? "Pending..." : "Register"}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
