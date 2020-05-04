import React, { Component, useState } from 'react';
import '../css/style.css';
import { Row, Col, Divider, Form, Input, Select, Button} from 'antd';

const { Option } = Select;
class banner extends Component {


  render() {
    return (
        <div className="banner">
            <Form className="filter" name="complex-form" >
                <Row justify="space-around">
                    <Col span={4}>
                        <label>Quận (huyện):</label>
                        <Form.Item>
                        <Select>
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <label>Quận (huyện):</label>
                        <Form.Item>
                        <Select>
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <label>Quận (huyện):</label>
                        <Form.Item>
                        <Select>
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <label>Quận (huyện):</label>
                        <Form.Item>
                        <Select>
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    
                </Row>
            </Form>
        </div>
    );
  }
}

export default banner;
