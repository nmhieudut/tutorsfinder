import React from "react";
import "./details.css";
import { Drawer, Divider, Col, Row, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import * as moment from "moment";

export default function Details(props) {

  const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );

  return (
    <div>
      <Drawer
        width={640}
        title={
          <div>
            <Avatar
              src={props.user.photo}
              icon={props.user.photo === "photo not found" && <UserOutlined />}
            />{" "}
            &nbsp;
            {props.user.username}
          </div>
        }
        placement="right"
        closable={false}
        onClose={props.onClose}
        visible={props.visible}
      >
        <Row>
          <Col>
            <DescriptionItem
              title="Full Name"
              content={`${props.user.firstName} ${props.user.lastName}`}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Gender"
              content={`${props.user.gender ? "Male" : "Female"}`}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Age"
              content={2020 - moment(props.user.dateOfBirth).format("YYYY")}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <DescriptionItem
              title="Birthday"
              content={props.user.dateOfBirth}
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content={props.user.email} />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Phone Number"
              content={props.user.phoneNumber}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem title="Address" content={props.user.address} />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
}
