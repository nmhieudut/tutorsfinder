import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;
export default function Tutor(props) {
    const { item } = props;
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <Meta title={item.name} description={item.email} />
                <p>{item.name}</p>
            </Card>,
        </div>
    )
}
