import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './style.css'
import { Form, Input, Select, Checkbox, Button } from 'antd';
const { Option } = Select;

export default function LoginForm(props) {
    const inputElementRef = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        inputElementRef.current.focus();
    }, []);

    const handleEnter = () => {
            props.login(username, password);
        
    }


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
      };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
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
            onFinish={handleEnter}
            onFinishFailed={onFinishFailed}
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input onChange={(e) => setUsername(e.target.value)} ref={inputElementRef} />
                </Form.Item>
        
                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>
        
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
        
            </Form>
        </div>
        
        
    )
}