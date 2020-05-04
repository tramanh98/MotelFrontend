import React, { useEffect, useRef, useState } from 'react';

import './style.css'
import { Form, Input, Select, Checkbox } from 'antd';
const { Option } = Select;

export default function LoginForm() {
   
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
      };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

    return (
        <div >
            <div id="head-login">
                <h4>With your social network</h4>
                <div id="btn-network-social">
                    <button type="button" class="btn btn-danger">Google</button>
                    <button type="button" class="btn btn-primary">Facebook</button>
                </div>
            </div>
            <div className="line">
                <p>or</p>
            </div>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            >
                <Form.Item
                label="Email"
                name="Email"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
        
                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
        
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
            </Form>
        </div>
        
        
    )
}