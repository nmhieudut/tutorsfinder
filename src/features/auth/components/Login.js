import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  Typography,
  Image,
  notification,
} from "antd";
import { loginAction } from "../actions";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/logo.png";
import "./login.css";
import Progress from "../../../components/Progress/Progress";
import jwt_decode from "jwt-decode";

const { Title, Paragraph } = Typography;

export default function Auth() {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.authReducers.loading);
  const loggedInUser = useSelector((state) => state.authReducers.loggedInUser);
  var error = useSelector((state) => state.authReducers.error);
  const decoded = loggedInUser && jwt_decode(loggedInUser);
  const role = decoded && decoded.auth;
  //TODO : GUI Login
  console.log("error:", error);
  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 2,
      span: 22,
    },
  };

  useEffect(() => {
    document.title = "Login";
    const isAuthenticated = localStorage.getItem("token") ? true : false;
    setIsAuth(isAuthenticated);
  }, []);

  const onFinish = (values) => {
    console.log(values);
    //TODO :Auth flow
    setIsAuth(true);
    dispatch(loginAction(values.username, values.password));
    // if (error) {
    //   openNotificationWithIcon(
    //     "error",
    //     "Error",
    //     "You can not access this site, try again later !"
    //   );
    //   error = null;
    // }
  };

  if (role === "ROLE_ADMIN" && isAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Progress isAnimating={loading} />
      <div className="image_page">
        <div className="layer"></div>
        <div className="about_us">
          <Title style={{ color: "white" }}> Dit me backend</Title>
          <Paragraph style={{ color: "white" }}> Dit me backend nha</Paragraph>
        </div>
        <div className="logo">
          <Image src={logo} width="30px" height="30px" />
        </div>
      </div>
      <div className="form_content">
        <Title>LOGIN</Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="User Name"
            name="username"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your username!",
            //   },
            // ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your password!",
            //   },
            // ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading ? 1 : 0}
              disabled={loading ? 1 : 0}
              target="_top"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
