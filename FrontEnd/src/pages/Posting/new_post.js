import React, { useState } from 'react'
import { Row, Col } from 'antd';
import {  Button, Form, Input,  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';
import Aux from '../../others/HOC/auxiliary'
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import { Select } from 'antd';
import { convertLocal} from '../../data/convert'
const { Option } = Select;

export const PostMotel = (props) => {
    const [IDdst, setIDdst] = useState(0);
    const [FileImg, setFileImg] = useState([]);
    const [UrlImg, setUrlImg] = useState([]);
    const [addr, setAddress] = useState('');
    const [local, setLocal] = useState({
        dst: '',
        ward: ''
    });

    const handleChangeDistrict = value => {
        setIDdst(value)
    }


    const onFinish =  (values) => {
        props.getValue(values, FileImg)
    };

    const onImageChange = event => {
        console.log(event.target.files);
        var arrFile = [event.target.files]
        var arrURL = [URL.createObjectURL(event.target.files[0])]
        setUrlImg(UrlImg => [...UrlImg, arrURL])
        setFileImg(FileImg => [...FileImg, arrFile ])
        console.log(FileImg);
        console.log(UrlImg);

    };

    const deleteImage = (index) => {
        console.log(index);
        var arrURL = UrlImg
        var arrFile = FileImg
        arrURL.splice(index, 1)
        arrFile.splice(index, 1)
        console.log(arrURL)
        setFileImg([...arrFile])
        setUrlImg([...arrURL])
    };

    const handleChangeWard = (e) =>{
        console.log("đây là change local "+ e)
        const lc = convertLocal(IDdst, e)
        setLocal({
            dst: lc.dst.split(' ').join('+'),
            ward: lc.ward.split(' ').join('+')
        })

    }

    const onChangeAddress = (e) =>{
        setAddress(e.target.value.split(' ').join('+'))
    }
    
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

        return (
            <Aux>
                <div className="container posting">
                    <div>
                        <h4>Đăng tin cho thuê</h4>
                    </div>
                    <Row>
                        <Col xs={24} sm={24} md={22} lg={16} xl={16}>
                            <Form layout="vertical" name="posting" onFinish={onFinish} validateMessages={validateMessages}>
                                <Input.Group>
                                    <div className="frame">
                                        <div className="titleframe">Thông tin cơ bản</div>
                                        <Row justify="space-between" className="infortable">
                                            <Col span={24}>
                                                <Form.Item name='title' label="Tiêu đề"
                                                    rules={[{ required: true, message: 'Nhập tiêu đề !'  }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={22} sm={22} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name='typeMotel'
                                                    label="Loại cho thuê"
                                                    rules={[{ required: true, message: 'Chọn loại !' }]}
                                                >
                                                    <Select placeholder="Chọn loại">
                                                        {
                                                            type.map((obj, index) => (
                                                                index != 0 ?
                                                                    <Option key={index} value={obj.type}>{obj.name}</Option> : ''
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name='arc'
                                                    label="Diện tích"
                                                    rules={[{ required: true, message: 'Nhập diện tích !' }]}
                                                >
                                                    <Input addonAfter="m²" />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                                <Form.Item
                                                    name='price'
                                                    label="Giá"
                                                    rules={[{ required: true, message: 'Nhập giá !' }]}
                                                >
                                                    <Input addonAfter="VND" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={11}>
                                                <Form.Item
                                                    name='district'
                                                    label="Quận"
                                                    rules={[{ required: true, message: 'Hãy chọn quận!' }]}
                                                >
                                                    <Select placeholder="Quận" onChange={handleChangeDistrict}>
                                                        {
                                                            districts.map((obj, index) => (
                                                                index != 0 ?
                                                                    <Option key={index} value={index}>{obj.name}</Option> : ''
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={11}>
                                                <Form.Item
                                                    name='ward'
                                                    label="Phường"
                                                rules={[{ required: true, message: 'Hãy chọn phường!' }]}
                                                >
                                                    <Select onChange= {handleChangeWard} placeholder="Phường">
                                                        {
                                                            wards[IDdst].name.map((obj, index) => (
                                                                index != 0 ?
                                                                    <Option key={index} value={index}>{obj}</Option> : ''
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item name='address' label="Địa chỉ"
                                                rules={[{ required: true }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item label="Địa chỉ trên bản đồ" name='localMap'
                                                rules={[{ required: true }]}
                                                >
                                                    <Input onChange={(e)=>onChangeAddress(e)}/>
                                                </Form.Item>
                                                <div id="map-container-google-1" className="z-depth-1-half map-container-5" style={{ height: '400px' }}>
                                                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBGZm_nEMOJDCmcqIBTDw5cayVT5aAoVLw&q=${addr},${local.ward},${local.dst},thanh+pho+ho+chi+minh,viet+nam`} frameborder="1"
                                                    style={{ border: '0' }} allowfullscreen></iframe>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="frame">
                                        <div className="titleframe">Thông tin mô tả</div>
                                        <Form.Item className="infortable" name='content' label="Nội dung"
                                        rules={[{ required: true }]}
                                        >
                                            <Input.TextArea autoSize={{ minRows: 10, maxRows: 12 }} />
                                        </Form.Item>
                                    </div>

                                    <div className="frame">
                                        <div className="titleframe">Hình ảnh</div>
                                        <Form.Item
                                            className="infortable"
                                            name="image"
                                        >
                                            <input
                                                name="files"
                                                type="file"
                                                onChange={(e)=>onImageChange(e)}
                                                alt="image"
                                            />
                                            <div className="row">
                                            {
                                                UrlImg.map((item, index) => 
                                                <div className="col-lg-3 containerImage">
                                                    <img src={item} className="MTimage" />
                                                    <div className="middle">
                                                        <button type="button" className="btn btn-primary" onClick={ () => deleteImage(index) }>Delete</button>
                                                    </div>
                                                </div>
                                                )
                                            }
                                            </div>
                                        </Form.Item>
                                        
                                    </div>
                                    
                                    <div className="frame">
                                        <div className="titleframe">Thông tin liên hệ</div>
                                        <Row className="infortable">
                                            <Col span={11}>
                                                <Form.Item name='phone_number' label="Số điện thoại"
                                                rules={[{ required: true }]}
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
            </Aux>

        );

}