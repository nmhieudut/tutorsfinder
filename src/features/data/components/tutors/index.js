
import React, { useEffect, useState } from 'react'
import Details from '../../../../components/users/Details'
import { Link } from 'react-router-dom'
import { Table, Space, Button, Avatar } from 'antd';
import { FolderViewOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction, deleteTutorAction } from '../../actions'

function Tutors() {
    //local state
    const [selectedUser, setSelectedUser] = useState([]);
    const [visible, setVisible] = useState(false);

    //Hooks
    const dispatch = useDispatch();

    //State redux
    const data = useSelector(state => state.tutorsReducer.data);
    const loading = useSelector(state => state.tutorsReducer.loading);
    // console.log("data", data)

    //Load data effect
    useEffect(() => {
        function loadData() {
            dispatch(loadDataAction())
        }
        loadData()
    }, []);

    const onSelect = (item) => {
        setSelectedUser(item);
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    const onDelete = (id) => {
        dispatch(deleteTutorAction(id))
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: id => `${id}`,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name) => (<div><Avatar src={record.avatar} />&nbsp;{name}</div>),
            sorter: {
                compare: (a, b) => a.name.length - b.name.length,
            },
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: gender => `${gender ? "Male" : "Female"}`,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: age => `${age}`,
            sorter: {
                compare: (a, b) => a.age - b.age,
                multiple: 3,
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: email => `${email}`
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: phone => `${phone}`
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            render: department => `${department}`
        },
        {
            title: 'Action',
            key: 'action',
            responsive: ['lg'],
            render: (id, record) => (
                <Space size="small">
                    <Button
                        type="primary"
                        icon={<FolderViewOutlined />}
                        onClick={() => onSelect(record)}>
                        {`View more >>`}
                    </Button>
                    <Link to={`/tutors/${record.id}/edit`}>
                        <Button
                            icon={<EditOutlined />}>
                            Edit
                    </Button>
                    </Link>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        type="primary"
                        onClick={() => { onDelete(record.id) }}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ]
    return (
        <div>
            <Table loading={loading} dataSource={data} columns={columns} />
            <Details user={selectedUser} visible={visible} onClose={onClose} />
        </div>
    )
}

export default React.memo(Tutors)