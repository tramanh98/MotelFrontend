import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card } from 'antd';
import ListRoom from './ListRoom'
import {Dashboard} from '../../index'
import { PhoneOutlined, FontSizeOutlined } from '@ant-design/icons';
export default class Account extends Component {
    render() {
        return (
            <Dashboard>
                <div>
                    <ListRoom />
                    <h4>Thông tin tài khoản</h4>
                    <Card title="Nguyễn Văn A" extra={<Link to="/profile/edit">Chỉnh sửa</Link>} style={{ width: 300, padding:0 }}>
                        <h6><i class='fas fa-envelope' style={{margin: "0 10px"}}></i>NguyenVanA@gmail.com </h6>
                        <h6><i class='fas fa-phone' style={{margin: "0 10px"}}></i>07784652355</h6>
                    </Card>
                </div>
            </Dashboard>
        );
    }

}