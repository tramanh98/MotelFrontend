import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { Card, Avatar, Button, Radio } from 'antd';
import { Form, Input, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';
// import PicturesWall from './ImgUpload'
import Aux from '../../others/HOC/auxiliary'
import NavBar from '../../PublicComponent/NavBar';
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import dientich from '../../data/dientich.json'
import price from '../../data/price.json'
import { Select } from 'antd';
import { AuthContext } from '../../others/contexts/auth.context';
import { Checkbox } from 'antd';
import { Spin, Alert } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
export default class PostMotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dst: 0,
            LFile: {
                file: [],
                url: [],
            },
            form: new FormData(),
            loading: false
        }
        this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
    }
    handleChangeDistrict = value => {
        this.setState({
            dst: value,
        });
    }

    static contextType = AuthContext;
    setForm = (id, img) => {
        const { form } = this.state;
        const cloneForm = form;
        
        cloneForm.append('motel', id)
        cloneForm.append('image', this.state.LFile.file[img][0])

        this.setState({ form: cloneForm })
        console.log(this.state.form.get("image"));
    }

    /** khi ấn button Đăng tin sẽ chạy vô hàm này */

    onPost = async(values) =>{
        const { user } = this.context;
        console.log(values);
        const data = {
            title: values.title,
            content: values.content,
            typeMotel: values.typeMotel,
            address: values.address,
            ward: String(values.ward),
            district: String(values.district),
            phone_number: values.phone_number,
            arc: values.arc,
            price: parseInt(values.price),
        }
        const response = await uploadImg(data, `${user.typeToken} ${user.token}`);
        const { id } = response.data
        for (var i = 0; i < this.state.LFile.file.length; i++) {
            this.setForm(id, i);
            const response = await uploadinfo(this.state.form, `${user.typeToken} ${user.token}`);
            console.log(response.data);
        }
        this.setState({
            loading: false
        })
        // this.props.getValue()

    }
    onFinish =  (values) => {
        this.setState({
            loading: true
        })
        this.onPost(values)
    };
    onImageChange = event => {
        console.log(event.target.files);
        var arrFile = event.target.files
        var arrURL = URL.createObjectURL(event.target.files[0])
        console.log("URL của hình ảnh: " + arrURL)
        this.setState({
            LFile: {
                file: [...this.state.LFile.file, arrFile],
                url: [...this.state.LFile.url, arrURL]
            }
        })
    };
    render() {

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

        const deleteImage = (index) => {
            console.log(index);
            var arrURL = this.state.LFile.url
            var arrFile = this.state.LFile.file
            arrURL.splice(index, 1)
            arrFile.splice(index, 1)
            console.log(arrURL)
            this.setState({
                LFile: {
                    file: [...arrFile],
                    url: [...arrURL]
                }
            })
        };

        return (
            <Aux>
                <Spin tip="Loading..." spinning={this.state.loading}>
                <div className="container posting">
                    <div>
                        <h4>Đăng tin cho thuê</h4>
                    </div>
                    <Row>
                        <Col xs={24} sm={24} md={22} lg={16} xl={16}>
                            <Form layout="vertical" name="posting" onFinish={this.onFinish} validateMessages={validateMessages}>
                                <Input.Group>
                                    <div className="frame">
                                        <div className="titleframe">Thông tin cơ bản</div>
                                        <Row justify="space-between" className="infortable">
                                            <Col span={24}>
                                                <Form.Item name='title' label="Tiêu đề"
                                                // rules={[{ required: true }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={22} sm={22} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name='typeMotel'
                                                    label="Loại cho thuê"
                                                // rules={[{ required: true, message: 'Please select your type!' }]}
                                                >
                                                    <Select placeholder="Chọn loại">
                                                        {
                                                            type.map((obj, index) => (
                                                                index != 0 ?
                                                                    <Option value={obj.type}>{obj.name}</Option> : ''
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name='arc'
                                                    label="Diện tích"
                                                // rules={[{ required: true, message: 'Please select your type!' }]}
                                                >
                                                    <Input addonAfter="m²" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name='price'
                                                    label="Giá"
                                                // rules={[{ required: true, message: 'Please select your type!' }]}
                                                >
                                                    <Input addonAfter="VND" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={11}>
                                                <Form.Item
                                                    name='district'
                                                    label="Quận"
                                                // rules={[{ required: true, message: 'Please select your country!' }]}
                                                >
                                                    <Select placeholder="Please select a country" onChange={this.handleChangeDistrict}>
                                                        {
                                                            districts.map((obj, index) => (
                                                                index != 0 ?
                                                                    <Option value={index}>{obj.name}</Option> : ''
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={11}>
                                                <Form.Item
                                                    name='ward'
                                                    label="Phường"
                                                // rules={[{ required: true, message: 'Please select your country!' }]}
                                                >
                                                    <Select placeholder="Please select a country">
                                                        {
                                                            wards[this.state.dst].name.map((obj, index) => (
                                                                index != 0 ?
                                                                    <Option value={index}>{obj}</Option> : ''
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item name='address' label="Địa chỉ"
                                                // rules={[{ required: true }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="frame">
                                        <div className="titleframe">Thông tin mô tả</div>
                                        <Form.Item className="infortable" name='content' label="Nội dung"
                                        // rules={[{ required: true }]}
                                        >
                                            <Input.TextArea autoSize={{ minRows: 10, maxRows: 12 }} />
                                        </Form.Item>
                                    </div>

                                    {/* <div className="frame">
                                        <div className="titleframe">Các tiện ích</div>
                                        <Form.Item name={['motel', "convenience"]}>
                                            <Checkbox.Group style={{ width: "100%" }}>
                                                <Row gutter={{ lg: 24, md: 24 }} justify="center">
                                                    <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                        <Checkbox value="parking" style={{ lineHeight: '32px' }}>
                                                            Chỗ đỗ xe
                                                </Checkbox>
                                                    </Col>
                                                    <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                        <Checkbox value="wifi" style={{ lineHeight: '32px' }}>
                                                            Internet
                                                </Checkbox>
                                                    </Col>
                                                    <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                        <Checkbox value="wshmachine" style={{ lineHeight: '32px' }} >
                                                            Máy giặt
                                                </Checkbox>
                                                    </Col>
                                                    <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                        <Checkbox value="regis" style={{ lineHeight: '32px' }}>
                                                            Tủ lạnh
                                                </Checkbox>
                                                    </Col>
                                                    <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                        <Checkbox value="elev" style={{ lineHeight: '32px' }}>
                                                            Thang máy
                                                </Checkbox>
                                                    </Col>
                                                    <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                        <Checkbox value="pccc" style={{ lineHeight: '32px' }}>
                                                            An toàn PCCC
                                                </Checkbox>
                                                    </Col>
                                                </Row>
                                            </Checkbox.Group>
                                        </Form.Item>
                                    </div> */}

                                    <div className="frame">
                                        <div className="titleframe">Hình ảnh</div>
                                        <Form.Item
                                            label="Hình ảnh"
                                            className="infortable"
                                            name="image"
                                        >
                                            <input
                                                name="files"
                                                type="file"
                                                onChange={this.onImageChange}
                                                alt="image"
                                            />
                                            {
                                                this.state.LFile.url.map((item, index) => (
                                                    <div className="containerImage">
                                                        <img src={item} className="MTimage" />
                                                        <div className="middle">
                                                            <div className="text">
                                                                <a onClick={() => deleteImage(index)}>Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                )
                                            }
                                        </Form.Item>
                                    </div>
                                    <div className="frame">
                                        <div className="titleframe">Thông tin liên hệ</div>
                                        <Row justify="space-between" className="infortable">
                                            <Col span={11}>
                                                <Form.Item label="Họ tên"
                                                // rules={[{ required: true }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={11}>
                                                <Form.Item name='phone_number' label="Số điện thoại"
                                                rules={[{ required: true }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item label="Email"
                                                // rules={[{ type: 'email' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="btn-submit-post">
                                        <Form.Item >
                                            <Button size="large" type="primary" htmlType="submit">
                                                Đăng tin
                                            </Button>

                                        </Form.Item>
                                    </div>

                                </Input.Group>
                            </Form>
                        </Col>
                    </Row>

                </div>
                </Spin>
            </Aux>

        );

    }
}