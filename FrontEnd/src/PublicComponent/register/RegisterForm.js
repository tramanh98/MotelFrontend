import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  notification,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export  const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values.username);
    try {
      const response = await axios.post(`http://127.0.0.1:8000/auth/registration/`, {
      username: String(values.username),
      email: "tramanh555456852@gmail.com",
      password1: String(values.password1),
      password2: String(values.password2),
      
    });
    console.log(response)
    if(response.status === 201){
      notification["success"]({
        title:"success",
        message:"Register Successfully"
      })
    }   
    } catch (error) {
      console.log("onFinish -> error", error.response)
      notification["error"]({
        title:"Error",
        message:JSON.stringify(error.response.data)
      })
    }
    
  };

 


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
        <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password1"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password2"
        label="Confirm Password"
        dependencies={['password1']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password1') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
