import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { Card, Avatar, Button, Radio } from 'antd';
import { Form, Input, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';
import PicturesWall from './ImgUpload'
import Aux from '../others/HOC/auxiliary'
import NavBar from '../PublicComponent/NavBar/index';
import { Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

export default class Posts extends Component {
    render() {
        // const layout = {
        //     labelCol: { span: 8 },
        //     wrapperCol: { span: 16 },
        //   };
          
          const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not validate email!',
              number: '${label} is not a validate number!',
            },
            number: {
              range: '${label} must be between ${min} and ${max}',
            },
          };
        const onFinish = values => {
            console.log(values);
          };
          const normFile = e => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          };
        return (
            <Aux>                
                <NavBar/>
                <div className="container">
                    <div>
                        <h4>Đăng tin cho thuê</h4>
                    </div>
                    <Row>
                        <Col span={16}>
                        <Form layout="vertical" name="posting" onFinish={onFinish} validateMessages={validateMessages}>
                            <Input.Group size="large">
                            <div className="frame">
                                <div className="titleframe">Thông tin cơ bản</div>
                                <Row justify="space-between" className="infortable">
                                    
                                    <Col span={24}>
                                        <Form.Item name={['motel', 'title']} label="Tiêu đề" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item
                                        name={['motel', 'type']}
                                        label="Mục cho thuê"
                                        rules={[{ required: true, message: 'Please select your country!' }]}
                                        >
                                            <Select placeholder="Please select a country">
                                            <Option value="china">China</Option>
                                            <Option value="usa">U.S.A</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item name={['motel', 'area']} label="Diện tích">
                                            <Input addonAfter="m²" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={7}>
                                        <Form.Item name={['motel', 'price']} label="Giá" >
                                            <Input addonAfter="VND" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={11}>
                                        <Form.Item
                                        name={['motel', 'district']}
                                        label="Quận"
                                        rules={[{ required: true, message: 'Please select your country!' }]}
                                        >
                                            <Select placeholder="Please select a country">
                                                <Option value="china">China</Option>
                                                <Option value="usa">U.S.A</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={11}>
                                        <Form.Item
                                        name={['motel', 'ward']}
                                        label="Phường"
                                        rules={[{ required: true, message: 'Please select your country!' }]}
                                        >
                                            <Select placeholder="Please select a country">
                                                <Option value="china">China</Option>
                                                <Option value="usa">U.S.A</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item name={['motel', 'address']} label="Địa chỉ" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    
                                </Row>
                                
                            </div>
                            <div  className="frame">
                                <div className="titleframe">Thông tin mô tả</div>
                                <Form.Item  className="infortable" name={['motel', 'basic']} label="Nội dung" rules={[{ required: true }]}>
                                    <Input.TextArea autoSize={{ minRows: 10, maxRows: 12 }} />
                                </Form.Item>
                            </div>
                            <div  className="frame">
                                <div className="titleframe">Hình ảnh</div>
                                <Form.Item
                                    name="upload"
                                    label="Hình ảnh"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    className="infortable"
                                >
                                    <Upload name="logo" action="/upload.do" listType="picture">
                                        <Button>
                                            <UploadOutlined /> Click to upload
                                        </Button>
                                    </Upload>
                                </Form.Item>
                            </div>
                            <div  className="frame">
                                <div className="titleframe">Thông tin liên hệ</div>
                                <Row  justify="space-between" className="infortable">
                                    <Col span={11}>
                                        <Form.Item name={['user', 'name']} label="Họ tên" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={11}>
                                        <Form.Item name={['user', 'phone']} label="Số điện thoại" rules={[{ required: true }]}>
                                        <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                            <Form.Item >
                                <Button size="large" type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    Đăng tin
                                </Button>
                            </Form.Item>
                            </Input.Group>
                        </Form>
                        </Col>
                    </Row>
                    
                </div>
            </Aux>
            
        );

    }
}