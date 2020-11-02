import React, { useState, useEffect } from "react";
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
import { storage } from "../../../firebase";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "./UserCreate.css";

const { Option } = Select;

function UsersCreate(props) {
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [urlImg, setUrlImg] = useState("");

  const dateFormat = "YYYY/MM/DD";
  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };
  const uploadButton = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {imgLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
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

  useEffect(() => {
    if (image) handleUpload();
  }, [image]);

  const handleChange = (e) => {
    setUrlImg("");
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setImgLoading(true);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrlImg(url);
            setImgLoading(false);
          });
      }
    );
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
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch((err) => {
        setLoading(false);
        openNotificationWithIcon("error", "Error!", err.response.data.message);
      });
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
      photo: urlImg || null,
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
          <div className="upload-img">
            <label style={{ marginRight: 10 }}>Avatar:</label>
            <div name="photo" className="avatar-uploader">
              {urlImg ? (
                <img
                  src={urlImg || "http://via.placeholder.com/300"}
                  alt="avatar"
                  width="100%"
                  height="100%"
                />
              ) : (
                uploadButton
              )}
            </div>
            <div className="choose-file">
              <input type="file" onChange={handleChange} title=" " />
            </div>
          </div>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value={1}>Male</Radio>
              <Radio value={0}>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="authority" label="Role" rules={[{ required: true }]}>
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
