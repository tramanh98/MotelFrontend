import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Avatar, Form, Input, Button } from 'antd';
import { Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AvatarUpload from './avatar'
import {Dashboard} from '../../index'
import '../../style.css'
export default class EditProfile extends Component {
    render() {
        const normFile = e => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          };
        const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not validate email!',
              number: '${label} is not a validate number!',
            }
          };
        const onFinish = values => {
            console.log(values);
          };
        return (
            <Dashboard>
            <div>
                <h4>Thông tin tài khoản</h4>
                <Form
                name="basic"
                onFinish={onFinish}
                validateMessages={validateMessages}
                >
                <div class="row">
                        <div class="col-3">
                            <label for="fname">Ảnh của bạn</label>
                        </div>
                        <div class="col-9">
                            <Form.Item
                            name="upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}>
                                <AvatarUpload/>
                            </Form.Item>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-9">
                            <Form.Item
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-9">
                            <Form.Item
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="email">Email</label>
                        </div>
                        <div class="col-9">
                            <Form.Item name="email" rules={[{ type: 'email' }]}>
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="email">Số điện thoại</label>
                        </div>
                        <div class="col-9">
                            <Form.Item
                            name="numberphone">
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="btn-submit-profile">
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Cập nhập
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
               </div>
            </Dashboard>
        );
    }

}