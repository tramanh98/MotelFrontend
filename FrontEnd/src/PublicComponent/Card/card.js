import React, { Component } from 'react'
import { Steps, Row, Col, Avatar, Button } from 'antd';
import './style.css'
const { Step } = Steps;
export default class Cardhm extends Component {
    render() {
        return (
            <Button type="link" style={{padding: 0, margin: 0}}>
                <div className="cter">
                    <Avatar src="../img/categories/cat-1.jpg" />
                    <div className="align">
                        <p style={{ margin: '0' }}>Tram Anh</p>
                    </div>
                </div>
            </Button>
            
        );
    }

}