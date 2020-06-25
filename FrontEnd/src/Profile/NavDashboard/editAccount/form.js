import React, { Component, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthContext } from '../../../others/contexts/auth.context';
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
    onFinish={(e) => props.onFinish(e)}>
        <Input.Group>
        <div class="row">
            <div class="col-3">
                <label for="fname">Ảnh của bạn</label>
            </div>
            <div class="col-9">
                <Form.Item
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                >
                        <AvatarUpload/>
                </Form.Item>
                
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label >Họ</label>
            </div>
            <div class="col-9">
                <Form.Item>
                    <Input value={props.fname} onChange={ (e) => props.onChangeFname(e.target.value)}/>
                </Form.Item>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label>Tên</label>
            </div>
            <div class="col-9">
                <Form.Item>
                    <Input value={props.lname} onChange={(e) => props.onChangeLName(e.target.value)}/>
                </Form.Item>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label>Email</label>
            </div>
            <div class="col-9">
                <Form.Item >
                    <Input disabled value={props.email} />
                </Form.Item>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label>Số điện thoại</label>
            </div>
            <div class="col-9">
                <Form.Item>
                    <Input value={props.phone} onChange={(e) => props.onChangePhone(e.target.value)}/>
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
