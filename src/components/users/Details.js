import React from 'react';
import { Drawer } from 'antd';

export default function Details(props) {
    console.log("props:", props.user)
    return (
        <div>
            <Drawer
                width='500'
                title={props.user.name}
                placement="right"
                closable={false}
                onClose={props.onClose}
                visible={props.visible}>
                <p>Name: {props.user.name}</p>
                <p>Email: {props.user.email}</p>
                <p>Phone: {props.user.phone}</p>
            </Drawer>
        </div>
    )
}
