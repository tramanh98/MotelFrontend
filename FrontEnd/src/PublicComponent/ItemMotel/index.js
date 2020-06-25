import './style.css';
import React from "react";
import { Component } from "react";
import { Layout, Col, Row, Tag, Button } from 'antd';
import { EnvironmentTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function MotelFrame() {

        return(
        <Row  className="item-mt">
            <Col span={8} className="img">
                <Link to="/detail/5">
                    <img src="./img/room/room-2.jpg" alt="room1"/>
                </Link>
            </Col>
            <Col span={16} style={{padding: '0 10px'}}>
                <div className="mt-title">
                    <Link to="/detail/5" className="subnav_link" >
                        <h4>Cho thuê căn hộ</h4>
                    </Link>
                </div>
                <div className="mt-content">
                    <div>
                        {/* <EnvironmentTwoTone style={{fontSize: '20px', marginTop: "0"}} /> */}
                    Địa chỉ: 21/45/52 đường số 8, Phường 8, Quận 8, HCM
                    </div>
                    <div>Loại: <Tag color="magenta">Căn hộ</Tag></div>
                    <div>Giá: <span className="mt-price">3.000.000 VND/tháng</span></div>
                    <div>Diện tích: <strong style={{color:"black"}}>80m²</strong></div>
                </div>
                
            </Col>
        </Row>
        

        );
    

}




