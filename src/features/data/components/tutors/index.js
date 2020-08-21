
import React, { useEffect } from 'react'
import Tutor from './Tutor'
import { List } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../../actions'

export default function Tutors() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.tutorsReducer.data);
    console.log("data", data)
    const loading = useSelector(state => state.tutorsReducer.loading);

    useEffect(() => loadData(), [])

    const loadData = () => {
        dispatch(loadDataAction())
    }

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

