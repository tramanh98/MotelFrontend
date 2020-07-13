import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { Avatar, Button } from 'antd';
import Aux from '../../others/HOC/auxiliary';
import './style.css'
import {useAuthContext} from '../../others/contexts/auth.context'
import NavBar from '../../PublicComponent/NavBar';
import {NavAvatar} from '../../PublicComponent/Avatar/index'
import { Breadcrumb } from 'antd';
export const Dashboard = props => {
    const { user } = useAuthContext();
    const username = user.username;
    const image = user.image;
    return (
        <Aux>
            <NavBar home={false}/>
            <div className="container">
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item><Link to='/home'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={16} className="profile">
                    <Col className="gutter-row dsh-mobile" span={6}>
                        <div className="menu_profile">
                            <div className="card">
                                <div className="card-header">
                                    <NavAvatar/>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-column">
                                        <div className="p-2 bder">
                                            <Link to="/profile/index">
                                                <Button className="clfont" type="link">Quản lý tài khoản</Button>
                                            </Link>
                                        </div>
                                        <div className="p-2 bder">
                                            <Link to="/profile/edit">
                                                <Button className="clfont" type="link">Chỉnh sửa thông tin</Button>
                                            </Link>
                                        </div>
                                        <div className="p-2 bder">
                                            <Link to="/posting">
                                                <Button className="clfont" type="link">Đăng tin cho thuê</Button>
                                            </Link>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={22} lg={18} xl={18} className="gutter-row">
                        {props.children}
                    </Col>

                </Row>
            </div>
        </Aux>
    );


}