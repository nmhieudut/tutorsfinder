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

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const { Option } = Select;

function UsersUpdate(props) {
  //console.log("param:", props.match.params.id)
  const [loadingImg, setLoadingImg] = useState(true);
  const [imgUrl, setImgUrl] = useState();
  //redux + hooks
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersReducers.data);
  const loading = useSelector((state) => state.usersReducers.loading);
  const success = useSelector((state) => state.usersReducers.success);
  console.log(data);

  const uploadButton = () => (
    <div>
      {loadingImg ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  useEffect(() => {
    dispatch(loadDetailUserAction(props.match.params.id));
    setImgUrl(data.photo);
  }, [props.match.params.id]);

  const dateFormat = "YYYY/MM/DD";
  // const openNotificationWithIcon = (type, message) => {
  //   notification[type]({
  //     message: message,
  //   });
  // };

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
  const normFile = (e) => {
    console.table("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoadingImg(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(
        info.file.originFileObj,
        (imgUrl) => setImgUrl(imgUrl),
        setLoadingImg(false)
      );
    }
  };
  function handleRoleChange(value) {
    console.log(`selected ${value}`);
  }
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
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
            password: data.password,
            email: data.email,
            gender: data.gender ? "male" : "female",
            photo: data.photo,
            dateOfBirth: moment(data.dateOfBirth, "MMM Do YY"),
            phoneNumber: data.phoneNumber,
            address: data.address,
            introduction: data.introduction,
            authority: data.authority ? "ROLE_ADMIN": "ROLE_USER",
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
              {imgUrl ? (
                <img src={imgUrl} alt="avatar" style={{ width: "100%" }} />
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
          <Form.Item name="authority" label="Role">
            <Select style={{ width: 120 }} onChange={handleRoleChange}>
              <Option value="ROLE_USER">User</Option>
              <Option value="ROLE_ADMIN">Admin</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              disable={loading}
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
