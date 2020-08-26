import React from 'react';
import './details.css'
import { Drawer, Divider, Col, Row, Avatar } from 'antd';

export default function Details(props) {
    //console.log("props:", props.user)
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
                title={<div><Avatar src={props.user.avatar} /> &nbsp;{props.user.name}</div>}
                placement="right"
                closable={false}
                onClose={props.onClose}
                visible={props.visible}>
                <Row>
                    <Col>
                        <DescriptionItem title="Full Name" content={props.user.name} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Gender" content={`${props.user.gender ? "Male" : "Female"}`} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Age" content={props.user.age} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DescriptionItem title="Birthday" content="February 2,1900" />
                    </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Introduction</p>
                <Row>
                    <Col>
                        <DescriptionItem title="Career" content="Teacher" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Department" content="Math,Chemistry" />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Skills"
                            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
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
                        <DescriptionItem title="Phone Number" content={props.user.phone} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Address"
                            content={props.user.address}
                        />
                    </Col>
                </Row>
            </Drawer>
        </div>
    )
}
