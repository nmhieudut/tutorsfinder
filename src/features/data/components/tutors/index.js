
import React, { useEffect } from 'react'
import Tutor from './Tutor'
import { List } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../../actions'

function Tutors() {
    const dispatch = useDispatch();
    //State-redux
    const data = useSelector(state => state.tutorsReducer.data);
    const loading = useSelector(state => state.tutorsReducer.loading);

    console.log("data", data)

    const loadData = () => {
        dispatch(loadDataAction())
    }

    useEffect(loadData, []);

    const renderItem = (item) => {
        return (
            <List.Item>
                <Tutor item={item} />
            </List.Item>
        )
    }
    return (
        <div>
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={renderItem}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 3,
                }}
            />
        </div>
    )
}

export default React.memo(Tutors)