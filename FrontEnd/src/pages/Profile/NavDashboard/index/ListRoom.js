import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { Tag, Table, Popconfirm, Button, Card } from 'antd';
import axios from 'axios';
import { AuthContext } from '../../../../others/contexts/auth.context'
import '../../style.css'
import {GetAllMyPost, DeletePost} from '../../../../api/api'
import {Dashboard} from '../../index'
import {ConvertTypeMT} from '../../../../data/convert'
export default class ListRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            data: [
            ],
          count: 2,
        }
        this.handleDelete = this.handleDelete.bind(this);;
    }
    static contextType = AuthContext;

    /** gọi API để lấy danh sách các bài đăng ***/
    async componentDidMount() {
        const { user } = this.context;
        if (user) {
            const token = user.token;
            console.log("Token " + token)
            const tk = user.typeToken + " " + token
            const response = await GetAllMyPost(tk)
            const { profile } = response.data
            console.log(profile)
            const listpost = []
            const usr = {
                fname: profile.first_name,
                lname: profile.last_name,
                email: profile.email,
                phone: profile.phone
            }
            for(var i =0; i < profile.post.length; i++ ){
                var res = Date.parse(profile.post[i].created_at)
                var d = new Date(res);
                listpost.push({
                        key: i + 1 ,
                        idPost: profile.post[i].id ,
                        title: profile.post[i].title,
                        postdate: d.toLocaleDateString(),
                        update: d.toLocaleDateString(),
                        tags: [ConvertTypeMT(String(profile.post[i].typeMotel))],
                })
            }
            this.setState(
                {   data: listpost,
                    user: usr }
            )
        }

    }
    
    handleDelete = async (key, id) => {
        const { user } = this.context;
        console.log("Xóa bài đăng : " + id)
        const response = await DeletePost(`${user.typeToken} ${user.token}`, id)
        console.log(response)
        const dataSource = [...this.state.data];
        this.setState({ data: dataSource.filter(item => item.key !== key) });
    };
    
    render() {
        const {user} = this.state
        
        const columns = [
            {
                title: 'ID',
                dataIndex: 'idPost',
                key: 'idPost',
                render: (text, record) => <Link to={`/detail/${record.idPost}`}>{text}</Link>,
            },
            {
                title: 'Tiêu đề',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => <Link to={`/detail/${record.idPost}`}>{text}</Link>,
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
                            let color = 'green';
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
                        <Link to={`/update/post/${record.idPost}`} style={{marginRight: "10px"}}>Edit</Link>
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key, record.idPost)}>
                            <a>Delete</a>
                        </Popconfirm>
                    </div>

                  ) : null,
            },
        ];
        return (
            <Dashboard>
                <h4>Bài đăng gần đây</h4>
                <div className="table-all-post">
                    <Table
                        columns={columns}
                        pagination={{ position: ['bottomRight'] }}
                        scroll={{x: true}}
                        dataSource={this.state.data}
                    />
                </div>
                <h4>Thông tin tài khoản</h4>
                <div>
                    <Card title={`${user.fname} ${user.lname}`} extra={<Link to="/profile/edit">Chỉnh sửa</Link>} style={{ width: 300, padding:0 }}>
                        <h6><i className='fas fa-envelope' style={{margin: "0 10px"}}></i>{user.email} </h6>
                        <h6><i className='fas fa-phone' style={{margin: "0 10px"}}></i>{user.phone}</h6>
                    </Card>
                </div>
            </Dashboard>
        );
    }
}