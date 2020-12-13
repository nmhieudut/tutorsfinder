import React, { useState } from "react";
import "./index.css";
import { Typography, Button, Modal } from "antd";
import logo from "../../../../assets/logo.png";
import NotiServices from "../../../../api/NotiServices";
const { Title } = Typography;

export default function NotificationsComponents() {
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  const pushNotification = () => {
    setLoading(true);
    async function pushNoti() {
      if (notification.trim() !== "") {
        await NotiServices.pushNotifications(notification);
        setLoading(false);
        Modal.success({
          content: "Sent to every devices",
        });
      } else {
        setLoading(false);
        Modal.error({
          content: "Say something",
        });
      }
    }
    pushNoti();
  };
  return (
    <div className="container">
      <div className="input-area">
        <div style={{ flex: 1, textAlign: "left" }}>
          <Title level={2}>Notification</Title>
          <p>Enter the text to send notification to every devices</p>
        </div>
        <input
          className="input-devices"
          type="input"
          onChange={(e) => setNotification(e.target.value)}
        />
        <Button
          loading={loading}
          disabled={loading}
          onClick={pushNotification}
          type="primary"
        >
          Send Notification
        </Button>
      </div>
      <div className="smartphone">
        <div className="content">
          <div className="noti-content">
            <div className="noti-logo">
              <div className="logo-container">
                {" "}
                <img src={logo} alt="" height="80%" />
              </div>
            </div>
            <div className="noti">
              <h4 style={{ fontWeight: 600 }}>Tutors Finder</h4>
              <p className="n-content">{notification}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
