import React, { useState } from 'react'
import { Card, Button } from 'antd';
import Details from '../../../../components/users/Details'
const { Meta } = Card;

function Tutor(props) {
    const [selectedUser, setSelectedUser] = useState([]);
    const [visible, setVisible] = useState(false);
    const { item } = props;
    console.log("item:", item)

    
    const onSelect = (item) => {
        setSelectedUser(item);
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }
    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <Meta title={item.name} description={item.email} />
                <p>{item.name}</p>
                <Button
                    style={{ float: 'right' }}
                    type="primary"
                    onClick={() => onSelect(item)}>
                    View details
                    </Button>
            </Card>,
            <Details user={selectedUser} visible={visible} onClose={onClose} />
        </div>
    )
}
export default React.memo(Tutor)
