import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { Card, Avatar, Button } from 'antd';
import FilterFind from '../PublicComponent/FilterFind'
import Aux from '../others/HOC/auxiliary';
import './style.css'
import NavBar from '../PublicComponent/NavBar/index';
const { Meta } = Card;
export const Dashboard = props => {
    return (
        <Aux>
            <NavBar />
            <div className="container">
                <Row gutter={16} className="profile">
                    <Col className="gutter-row" span={6}>
                        <div className="menu_profile">
                            <div class="card">
                                <div class="card-header">
                                    <Avatar style={{ backgroundColor: "orange", verticalAlign: 'middle' }} size="large">
                                        TA
                                    </Avatar>
                                    <span>   Tram Anh Ngọc Dương</span>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-column">
                                        <div class="p-2 bder">
                                            <Link to="/profile/index">
                                                <Button className="clfont" type="link">Quản lý tài khoản</Button>
                                            </Link>
                                        </div>
                                        <div class="p-2 bder">
                                            <Link to="/profile/edit">
                                                <Button className="clfont" type="link">Chỉnh sửa thông tin</Button>
                                            </Link>
                                        </div>
                                        <div class="p-2 bder">
                                            <Link to="/posting">
                                                <Button className="clfont" type="link">Đăng tin cho thuê</Button>
                                            </Link>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="findMotel">
                            <FilterFind typeft={true} />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={18} className="secondpart">
                        {props.children}
                    </Col>

                </Row>
            </div>
        </Aux>
    );


}