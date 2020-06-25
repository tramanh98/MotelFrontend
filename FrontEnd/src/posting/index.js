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
import districts from '../data/districts.json'
import wards from '../data/wards.json'
import type from '../data/type.json'
import dientich from '../data/dientich.json'
import price from '../data/price.json'
import { Select } from 'antd';
import { AuthContext } from '../others/contexts/auth.context';
import axios from 'axios';
import { Checkbox } from 'antd';
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
    constructor(props) {
        super(props);
        this.state = {
            dst: 0,
            LFile: {
                file: [],
                url: [],
            }
        }
        this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
        this.onFinish = this.onFinish.bind(this);
    }
    handleChangeDistrict = value => {
        this.setState({
            dst: value,
        });
    }

    static contextType = AuthContext;
    onFinish = async (values) => {
        const { user } = this.context;
        console.log(values);
        // const formData = new FormData();
        // //Object.keys(values).forEach(key => formData.append(key, values[key]));
        
        // formData.append('typeMotel', 1);
        // formData.append('district', 1);
        // formData.append('ward', 1);
        // formData.append('title', "Cho thuê phòng trọ");
        // formData.append('price', 20000);
        // formData.append('areas', 20);
        // formData.append('content', 'cho thue nha tro', '3/5/5623456');
        // formData.append('address',"haaaaaaa")
        // // formData.append('images', this.state.LFile.file[0])
        // Array.from(this.state.LFile.file).forEach((image,index) => {
        //     console.log("Posts -> onFinish -> image", image)
        //     formData.append(`images[${index}]`, image);
        // });
        // this.state.


        // const response = await axios.post(`http://127.0.0.1:8000/PhongTro/api/posts/`, 
        // {
        //     typeMotel: 1,
        //     district:1,
        //     ward:1,
        //     title: "cho thue nha tro",
        //     price: 2000,
        //     areas: 20,
        //     service: {
        //         parking: true,
        //         wifi: true,
        //         washing_machine: true,
        //         air_condition: true,
        //         yard:true,
        //         PCCC:true,
        //         elevator:true
        //         }
        // }, 
        // {
        //     headers: {
        //         // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        //         // 'Content-Disposition': 'attachment; filename=file',
        //         // 'filename': 'file',
        //         Authorization: `${user.typeToken} ${user.token}`,
        //         // 'Content-Disposition': 'form-data; name="file_tst"'
        // },
        // })
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });


        // const { data } = response;
        // const { user, onLogin } = this.context;
        // console.log("response from server:", response);
        // if (typeof data.key !== "undefined") {
        //     console.log("login successful");
        //     this.setState({
        //     username: data.user.username,
        //     token: data.key,
        //     MessageOpen: false,
        //     visible: false,
        //     });
        //     this.props.reset();
        //     const dt = {  iduser:data.user.pk, 
        //                 fname:data.user.first_name, 
        //                 lname: data.user.last_name,
        //                 image: data.user.image,
        //                 email: data.user.email,
        //                 typeToken: "Token",
        //                 username: data.user.username, 
        //                 token: data.key 
        //                 }
        //     onLogin({ user: dt });
        // }
        // else {
        //     this.setState({ MessageOpen: true, MessageText: response.data.message });
        // }



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



        const onImageChange = event => {
            console.log(event.target.files);
            console.log(typeof this.state.LFile)
            var arrFile = event.target.files
            var arrURL = URL.createObjectURL(event.target.files[0])
            this.setState({
                LFile: {
                    file: [...this.state.LFile.file, arrFile],
                    url: [...this.state.LFile.url, arrURL]
                }
            })
            console.log(typeof this.state.LFile)
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
                <NavBar />
                <div className="container posting">
                    <div>
                        <h4>Đăng tin cho thuê</h4>
                    </div>
                    <Row>
                        <Col xs={24} sm={24} md={22} lg={16} xl={16}>
                            <Form layout="vertical" name="posting" onFinish={this.onFinish} validateMessages={validateMessages}>
                                <Input.Group size="small">
                                    <div className="frame">
                                        <div className="titleframe">Thông tin cơ bản</div>
                                        <Row justify="space-between" className="infortable">
                                            <Col span={24}>
                                                <Form.Item name={['motel', 'title']} label="Tiêu đề" rules={[{ required: true }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={22} sm={22} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name={['motel', 'type']}
                                                    label="Loại cho thuê"
                                                    rules={[{ required: true, message: 'Please select your type!' }]}
                                                >
                                                    <Select placeholder="Chọn loại">
                                                        {
                                                            type.map((obj, index) => (
                                                                index != 0 ?
                                                                    <Option value={index}>{obj}</Option> : ''
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name={['motel', 'DienTich']}
                                                    label="Diện tích"
                                                    rules={[{ required: true, message: 'Please select your type!' }]}>
                                                    <Input addonAfter="m²" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name={['motel', 'price']}
                                                    label="Giá"
                                                    rules={[{ required: true, message: 'Please select your type!' }]}>
                                                    <Input addonAfter="VND" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={11}>
                                                <Form.Item
                                                    name={['motel', 'district']}
                                                    label="Quận"
                                                    rules={[{ required: true, message: 'Please select your country!' }]}
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
                                                    name={['motel', 'ward']}
                                                    label="Phường"
                                                    rules={[{ required: true, message: 'Please select your country!' }]}
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
                                                <Form.Item name={['motel', 'address']} label="Địa chỉ" rules={[{ required: true }]}>
                                                    <Input />
                                                </Form.Item>
                                            </Col>

                                        </Row>

                                    </div>
                                    {/* dhbvdhbvid  */}
                                    <div className="frame">
                                        <div className="titleframe">Thông tin mô tả</div>
                                        <Form.Item className="infortable" name={['motel', 'basic']} label="Nội dung" rules={[{ required: true }]}>
                                            <Input.TextArea autoSize={{ minRows: 10, maxRows: 12 }} />
                                        </Form.Item>
                                    </div>

                                    <div className="frame">
                                        <div className="titleframe">Các tiện ích</div>
                                        
                                        <Form.Item name={['motel', "convenience"]} >
                                            <Checkbox.Group style={{width: "100%"}}>
                                                <Row gutter={{lg:24,md:24}} justify="center">
                                                <Col span={7}>
                                                <Checkbox value="parking" style={{ lineHeight: '32px' }}>
                                                    Chỗ đỗ xe
                                                </Checkbox>
                                                </Col>
                                                <Col span={7}>
                                                <Checkbox value="wifi" style={{ lineHeight: '32px' }}>
                                                    Internet
                                                </Checkbox>
                                                </Col>
                                                <Col span={7}>
                                                <Checkbox value="wshmachine" style={{ lineHeight: '32px' }} >
                                                    Máy giặt
                                                </Checkbox>
                                                </Col>
                                                <Col span={7}>
                                                <Checkbox value="regis" style={{ lineHeight: '32px' }}>
                                                    Tủ lạnh
                                                </Checkbox>
                                                </Col>
                                                <Col span={7}>
                                                <Checkbox value="elev" style={{ lineHeight: '32px' }}>
                                                    Thang máy
                                                </Checkbox>
                                                </Col>
                                                <Col span={7}>
                                                <Checkbox value="pccc" style={{ lineHeight: '32px' }}>
                                                    An toàn PCCC
                                                </Checkbox>
                                                </Col>
                                                </Row>
                                            </Checkbox.Group>
                                        </Form.Item>
                                        
                                    </div>

                                    <div className="frame">
                                        <div className="titleframe">Hình ảnh</div>
                                        <Form.Item
                                            label="Hình ảnh"
                                            className="infortable"
                                        >
                                            <input
                                                name="files"
                                                type="file"
                                                onChange={onImageChange}
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
            </Aux>

        );

    }
}