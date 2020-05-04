import React, { Component, useState } from 'react';
import './style.css';
import { Row, Col, Form, Select, Button} from 'antd';
const { Option } = Select;
class Banner extends Component {


  render() {
    return (
        <div className="banner">
            <div id="background-filter">
                <Form className="filter" name="complex-form" >
                    <Row justify="space-around">
                        <Col span={3}>
                            <label>Quận:</label>
                            <Form.Item>
                            <Select>
                                <Option value="rmb">RMB</Option>
                                <Option value="dollar">Dollar</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <label>Phường:</label>
                            <Form.Item>
                            <Select>
                                <Option value="rmb">RMB</Option>
                                <Option value="dollar">Dollar</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <label>Dịch vụ:</label>
                            <Form.Item>
                            <Select>
                                <Option value="rmb">RMB</Option>
                                <Option value="dollar">Dollar</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <label>Mức giá:</label>
                            <Form.Item>
                            <Select>
                                <Option value="rmb">RMB</Option>
                                <Option value="dollar">Dollar</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <label>Diện tích:</label>
                            <Form.Item>
                            <Select>
                                <Option value="rmb">RMB</Option>
                                <Option value="dollar">Dollar</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col className="btn-find" span={1}>
                        <Button  type="primary" size={'large'}>
                            Tìm
                        </Button>
                        </Col>
                        
                    </Row>
                </Form>
            </div>
        </div>
    );
  }
}

export default Banner;
