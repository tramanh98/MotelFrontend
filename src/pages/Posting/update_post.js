import {
    Form,
    Select,
    Button,
    Row,
    Col,
    Input,
    Spin
  } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import Aux from '../../others/HOC/auxiliary'
import { convertLocal} from '../../data/convert'
  const { Option } = Select;
  
  
export const  UpdateBoard = (props) => {
  
    
    const [IDdst, setIDdst] = useState(parseInt(props.dataPost.district));
    const [FileImg, setFileImg] = useState([]);  // new file img
    const [UrlImg, setUrlImg] = useState([...props.dataPost.imgs]);
    const [deleteimg, setDeleteimg] = useState([]); // file img is going to be deleted, id
    const [numOfImg, setNumOfImg] = useState(props.dataPost.numOfImg);
    const [addr, setAddress] = useState(props.dataPost.address.split(' ').join('+'));
    const [local, setLocal] = useState(convertLocal(props.dataPost.district, props.dataPost.ward));


    const handleChangeDistrict = value => {
      setIDdst(value)
    }
    const onFinish = values => {
        console.log('Received values of form: ', values);
        props.getValue({...values}, props.dataPost.id, deleteimg, FileImg)
      };
  
    const onImageChange = event => {
        console.log(event.target.files);
        var arrFile = [event.target.files]
        var arrURL = [URL.createObjectURL(event.target.files[0])]
        setUrlImg(UrlImg => [...UrlImg, arrURL])
        setFileImg(FileImg => [...FileImg, arrFile ])

    };

    const deleteImage = (index) => {
        console.log(numOfImg);
        if(index < numOfImg ){
            var t = UrlImg[index].id
            console.log(t)
            setNumOfImg(numOfImg -1)
            setDeleteimg(deleteimg => [...deleteimg, t])
            var arrURL = UrlImg
            arrURL.splice(index, 1)
            console.log(arrURL)
            setUrlImg([...arrURL])
        }
        else {
            var arrURL = UrlImg
            var arrFile = FileImg
            arrURL.splice(index, 1)
            arrFile.splice(index - numOfImg, 1)
            console.log(arrURL)
            setFileImg([...arrFile])
            setUrlImg([...arrURL])
        }
        
        
    };

    const handleChangeWard = (e) =>{
        const lc = convertLocal(IDdst, e)
        setLocal({
            dst: lc.dst.split(' ').join('+'),
            ward: lc.ward.split(' ').join('+')
        })

    }

    const onChangeAddress = (e) =>{
        setAddress(e.target.value.split(' ').join('+'))
    }
    
    return (
      <Aux>
            <div className="container posting">
                <div>
                    <h4>Cập nhập bài đăng</h4>
                </div>
                <Row>
                    <Col xs={24} sm={24} md={22} lg={16} xl={16}>
                        <Form 
                          layout="vertical" 
                          name="posting" 
                          onFinish={onFinish} 
                          initialValues={{
                            ['title']: props.dataPost.title,
                            ['typeMotel']: props.dataPost.typeMotel,
                            ['arc']: props.dataPost.arc,
                            ['price']: props.dataPost.price,
                            ['district']: parseInt(props.dataPost.district),
                            ['ward']: parseInt(props.dataPost.ward),
                            ['address']: props.dataPost.address,
                            ['content']: props.dataPost.content,
                            ['phone_number']: props.dataPost.phone_number,
                            ['localMap']: props.dataPost.localMap
                          }}
                        >
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
                                                rules={[{ required: true, message: 'Nhập loại cho thuê!' }]}
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
                                                rules={[{ required: true, message: 'Nhập diện tích!' }]}
                                            >
                                                <Input addonAfter="m²" />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={11} sm={11} md={7} lg={7} xl={7}>
                                            <Form.Item
                                                name='price'
                                                label="Giá"
                                                rules={[{ required: true, message: 'Nhập giá!' }]}
                                            >
                                                <Input addonAfter="VND" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={11}>
                                            <Form.Item
                                                name='district'
                                                label="Quận"
                                                rules={[{ required: true, message: 'Hãy chon một quận!' }]}
                                            >
                                                <Select placeholder="Quận" 
                                                onChange={handleChangeDistrict}
                                                >
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
                                                <Select placeholder="Phường"
                                                onChange={handleChangeWard}>
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
                                                        rules={[{ required: true, message: 'Nhập địa chỉ!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                                <Form.Item label="Địa chỉ trên bản đồ" name='localMap'
                                                            rules={[{ required: true, message: 'Nhập địa chỉ trên bản đồ!' }]}
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
                                                        rules={[{ required: true, message: 'Hãy nhập nội dung!' }]}
                                    >
                                        <Input.TextArea autoSize={{ minRows: 10, maxRows: 12 }} />
                                    </Form.Item>
                                </div>

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
                                            onChange={onImageChange}
                                            alt="image"
                                        />
                                        <div className="row">
                                            {
                                                UrlImg.map((item, index) => 
                                                index < numOfImg ? 
                                                <div className="col-lg-3 containerImage">
                                                    <img src={item.image} className="MTimage" />
                                                    <div className="middle">
                                                        <button type="button" className="btn btn-primary" onClick={ () => deleteImage(index) }>Delete</button>
                                                    </div>
                                                </div>
                                                :
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
                                    <Row  className="infortable">
                                        <Col span={11}>
                                            <Form.Item name='phone_number' label="Số điện thoại"
                                            rules={[{ required: true, message: 'Nhập số điện thoại!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="btn-submit-post">
                                    <Form.Item >
                                        <Button size="large" type="primary" htmlType="submit">
                                            Cập nhập
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

};
  