import React from "react";
import { Link } from "react-router-dom";
import '../style.css';
import { Component } from "react";
import { Col, Tag, Row  } from 'antd';

export default function Detail(props) {

    return (
        <div className="convenient">
            <h3>{props.title}</h3>
            <Row justify="space-between">
                
                {props.arrDT.map((cv) =>
                (
                    <Col span={props.colu} style={{padding: '0', margin:0}} >
                        <div  className="infor">
                            <Col span={2} style={{padding: 0, margin: 0}}><i className={cv.classNm} style={{margin: 0}}></i></Col>
                            <Col span={20} style={{padding: 0,margin: 0}} >{cv.text}</Col>
                        </div>
                        {cv.basic === undefined ? '' : <p>{cv.basic}</p>} 
                    </Col>
                ))}
            </Row>
        </div>
        

    );

}




