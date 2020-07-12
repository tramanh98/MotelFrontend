import React, { Component, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Row, Col, Avatar, Form, Input, Button, InputNumber} from 'antd';
import AvatarUpload from './avatar'


const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
    };

export const FormUD = (props) => {
  return (
        <Form             
            name="posting" 
            onFinish={(values) => props.onFinish(values)}
            initialValues={{
                ['fname']: props.fname,
                ['lname']: props.lname,
                ['email']: props.email,
                ['phone']: props.phone,
            }}
        >
        <Input.Group>
        <div className="row">
            <div className="col-3">
                <label for="fname">Ảnh của bạn</label>
            </div>
            <div className="col-9">
                <Form.Item
                // name="upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                >
                        <AvatarUpload/>
                </Form.Item>
                
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <label >Họ</label>
            </div>
            <div className="col-9">
                <Form.Item name="fname">
                    <Input/>
                </Form.Item>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <label>Tên</label>
            </div>
            <div className="col-9">
                <Form.Item name="lname">
                    <Input />
                </Form.Item>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <label>Email</label>
            </div>
            <div className="col-9">
                <Form.Item name="email">
                    <Input disabled />
                </Form.Item>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <label>Số điện thoại</label>
            </div>
            <div className="col-9">
                <Form.Item name="phone">
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
        </Input.Group>
    </Form>
  );
};
