import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './style.css'
import { Form, Input, Select, Checkbox, Button, Divider } from 'antd';
import Aux from '../../others/HOC/auxiliary'
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
        wrapperCol: { offset: 5, span: 16 },
    };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Aux>
            <Divider>or</Divider>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleEnter}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input onChange={(e) => setUsername(e.target.value)} id="input-login" ref={inputElementRef} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)} />
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
        </Aux>


    )
}