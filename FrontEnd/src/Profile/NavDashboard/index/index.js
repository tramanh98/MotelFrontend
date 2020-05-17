import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card } from 'antd';
import './style.css'
import ListRoom from './ListRoom'
import {Dashboard} from '../../index'
export default class Account extends Component {
    render() {
        return (
            <Dashboard>
            <div>
                <ListRoom />
                <h4>Thông tin tài khoản</h4>
                <Card title="Nguyễn Văn A" extra={<Link to="/profile/edit">Chỉnh sửa</Link>} style={{ width: 300, padding:0 }}>
                    <p style={{ margin:0 }}>NguyenVanA@gmail.com</p>
                    <p style={{ margin:0 }}>07784652355</p>
                </Card>
            </div>
            </Dashboard>
        );
    }

}