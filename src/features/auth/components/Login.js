import React, { useState, useEffect } from "react";
import { Form, Input, Button, Typography, Image, notification } from "antd";

import { Redirect } from "react-router-dom";

import logo from "../../../assets/logo.png";
import reactLogo from "../../../assets/react_ts.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlus,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import "./login.css";
import auth from "../../../api/auth";
import Progress from "../../../components/Progress/Progress";

const { Title, Paragraph } = Typography;
export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  //TODO : GUI Login
  const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: {
      span: 24,
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
  }, []);

  const onFinish = (values) => {
    setLoading(true);
    auth
      .login(values.username, values.password)
      .then((res) => {
        setLoading(false);
        setIsAuth(true);
        openNotificationWithIcon("success", "Success", "Login successfully !");
      })
      .catch((err) => {
        setIsAuth(false);
        setLoading(false);
        if (err.response.data.status === 500) {
          openNotificationWithIcon(
            "error",
            "Error",
            "Can't access this site, try again later !"
          );
        } else if (err.response.data.status === 401) {
          openNotificationWithIcon(
            "error",
            "Error",
            "Wrong username or password, try again later !"
          );
        }
      });
  };
  if (isAuth) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="main-page">
      <Progress isAnimating={loading} />
      <div className="image_page">
        <div className="layer"></div>
        <div className="about_us">
          <Title style={{ color: "white" }}> Welcome</Title>
          <div className="space-line"></div>
          <Paragraph style={{ color: "white" }}>
            {" "}
            Welcome to <strong>TutorsFinder</strong> administrator page.
          </Paragraph>
        </div>
        <div className="footer">
          <div className="social-contact">
            <div className="social-icon">
              <a
                href="https://www.facebook.com/hieumaxnho"
                target="_blank"
                className={"fa" + " fa-facebook"}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                target="_blank"
                href="https://www.github.com/tuanconbu"
                className={"fa " + "fa-twitter"}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="fa fa-google">
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
            </div>

            <p style={{ color: "#424242" }}>
              Telephone: (+84)123456789 / Hotline: 113
            </p>
          </div>
        </div>
      </div>

      <div className="form_content">
        <div className="logo">
          <Image src={logo} width="60px" height="60px" />
          <h1 className="title">TUTORS FINDER</h1>
        </div>
        <Form
          {...layout}
          name="basic"
          size="large"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your username!",
            //   },
            // ]}
          >
            <Input placeholder="User Name" />
          </Form.Item>

          <Form.Item
            name="password"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your password!",
            //   },
            // ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "green" }}
              loading={loading ? 1 : 0}
              disabled={loading ? 1 : 0}
              target="_top"
            >
              {loading ? "Checking..." : "Log In"}
            </Button>
          </Form.Item>
        </Form>
        <div className="powered-by">
          <h2>
            Powered by{" "}
            <img
              className="reactLogo"
              src={reactLogo}
              width="30px"
              height="30px"
            />{" "}
            ReactJs
          </h2>
        </div>
      </div>
    </div>
  );
}
