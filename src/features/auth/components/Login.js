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
        console.log({ err });
        setLoading(false);
        openNotificationWithIcon("error", "Error", err.response.data.message);
      });
  };
  if (isAuth) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="root-login">
      <Progress isAnimating={loading} />
      <div className="main-page">
        <div className="main-page-content">
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
                    rel="noopener noreferrer"
                    className={"fa" + " fa-facebook"}
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
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
              <Form.Item name="username">
                <Input placeholder="User Name" />
              </Form.Item>

              <Form.Item name="password">
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
                  {loading ? "Checking..." : "Sign In"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
