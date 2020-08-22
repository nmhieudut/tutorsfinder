import React, { useState } from 'react'
import Tutors from '../../features/data/components/tutors'
import TutorsManagement from './TutorsManagement'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function TutorsList() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
    return (
        <div>
            <div style={{ textAlign: 'right', padding: '30px' }}>
                <Button type="primary" onClick={showDrawer}>
                    <PlusOutlined /> New account
                </Button>
            </div>
            <Tutors />
            <TutorsManagement visible={visible} showDrawer={showDrawer} onClose={onClose} />
        </div>
    )
}
