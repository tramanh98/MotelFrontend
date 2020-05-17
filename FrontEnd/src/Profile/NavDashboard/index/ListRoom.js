import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { Row, Col, Tag, Button } from 'antd';
import { Table, Popconfirm } from 'antd';
import './style.css'

export default class ListRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '2',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ ở quận 12, trên đường hoàng hoa thám',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '3',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '3',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '4',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '5',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '6',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '7',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '8',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '9',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '10',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
                {
                    key: '11',
                    idPost: '12',
                    title: 'Cho thuê phòng trọ giá rẻ',
                    postdate: '12/05/2020',
                    update: '12/05/2020',
                    tags: ['căn hộ'],
                },
            ],
          count: 2,
        }
        this.handleDelete = this.handleDelete.bind(this);;
    }
    
    handleDelete = key => {
        //*gọi API để xóa bài đăng ở đây, sau khi nhận đc confirm thì popup thành công}
    const dataSource = [...this.state.data];
    this.setState({ data: dataSource.filter(item => item.key !== key) });
    };
    
    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'idPost',
                key: 'idPost',
                render: (text) => <Link to='/posting?edit=12'>{text}</Link>,
            },
            {
                title: 'Tiêu đề',
                dataIndex: 'title',
                key: 'title',
                render: (text) => <Link to='/posting?edit=12'>{text}</Link>,
            },
            {
                title: 'Ngày đăng',
                dataIndex: 'postdate',
                key: 'postdate',
            },
            {
                title: 'Update lần cuối',
                dataIndex: 'update',
                key: 'update',
            },
            {
                title: 'Loại',
                key: 'tags',
                dataIndex: 'tags',
                render: (tags) => (
                    <span>
                        {tags.map((tag) => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => 
                  this.state.data.length >= 1 ? (
                    <div>
                        <Link to="/posting?edit=12" style={{marginRight: "10px"}}>Edit</Link>
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <a>Delete</a>
                        </Popconfirm>
                    </div>

                  ) : null,
            },
        ];
        return (
            <div>
                <h4>Bài đăng gần đây</h4>
                <Table
                    columns={columns}
                    pagination={{ position: ['bottomRight'] }}
                    dataSource={this.state.data}
                />
            </div>
        );
    }
}