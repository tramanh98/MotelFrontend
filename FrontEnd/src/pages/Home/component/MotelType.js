import React, { Component} from 'react';
import { Col, Row } from 'antd';
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import News from '../../../PublicComponent/NewsBoard/index';
import Contract from '../../../PublicComponent/Sideline_news/index'
import { Link } from "react-router-dom";
import SliderMotel from '../../../PublicComponent/Slider/index'
import HomeList from './HomeListMotel'
export const MotelType = () => {
        return (
            <div>
                <div className="hm-all-type" style={{margin: "0 0 10px 10px"}}>Phổ biến</div>
                <div>
                    <SliderMotel/>
                </div>
                <Row gutter={[16, 16]} justify="center" style={{margin: '20px 0'}}>
                    <Col xs={24} sm={24} md={22} lg={16} xl={16}>
                        <div className="d-flex align-items-end  hit-tt" style={{padding:0, margin: 0}}>
                            <div className="mr-auto p-2" style={{padding:0, margin: 0}}><div className="fct">Nổi bật</div></div>
                            <div className="p-2" style={{padding: 0, margin: 0}}><Link to={'/results?q=latest'} style={{padding: 0, margin: 0}} >Xem thêm</Link></div>
                            
                        </div>
                        <div className="list-mt-hot">
                            <HomeList />
                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} >
                        <News/>
                        <Contract/>
                    </Col>
                </Row>
            </div>
        )
}