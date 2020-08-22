import React from 'react';
import './details.css'
import { Drawer, Divider, Col, Row } from 'antd';

export default function Details(props) {
    console.log("props:", props.user)
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
                title={props.user.name}
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
                        <DescriptionItem title="City" content="HangZhou" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Country" content="China🇨🇳" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Birthday" content="February 2,1900" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Website" content="-" />
                    </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Company</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Position" content="Programmer" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Responsibilities" content="Coding" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Department" content="XTech" />
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
                            title="Github"
                            content={
                                <a href="http://github.com/ant-design/ant-design/">
                                    github.com/ant-design/ant-design/
                  </a>
                            }
                        />
                    </Col>
                </Row>
            </Drawer>
        </div>
    )
}
