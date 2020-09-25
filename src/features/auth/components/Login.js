import React, { useState, useEffect } from "react";
import { Form, Input, Button, Space, Typography, Image } from "antd";
import { loginAction } from "../actions";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/logo.png";
import Progress from "../../../components/Progress/Progress";

const { Title } = Typography;

export default function Auth() {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducers.loading);
  const loggedInUser = useSelector((state) => state.authReducers.loggedInUser);
  const error = useSelector((state) => state.authReducers.error);
  console.log("err:", error);
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
    setIsAuth(true);
    dispatch(loginAction(values.username, values.password));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (loggedInUser || isAuth) {
    return <Redirect to="/home" target="_top" />;
  }
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Progress isAnimating={loading} />
      <div
        style={{
          marginTop: 75,
          padding: 155,
          border: "1px solid #bdbdbd",
          boxShadow: "3px 3px #888888",
          position: "absolute",
        }}
      >
        <div>
          <Space direction="vertical">
            <Image src={logo} />
            <Title>LOGIN</Title>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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
                  disable={loading ? 1 : 0}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </div>
    </div>
  );
}
