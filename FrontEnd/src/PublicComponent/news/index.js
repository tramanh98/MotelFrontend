import { Modal, Button, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css'
import moment from 'moment';
class News extends Component {
  state = {
    loading: false,
    visible: false,
  };

  
  
  render() {
      return(

        <div >
            <h4 style={{fontWeight: 'bold'}}>Tin mới đăng</h4>
            <ul style={{padding: '0 0 0 20px'}}>
                <li>Phòng trọ chính chủ cho thuê gần ĐHCN 
                    <div className="dt">
                        <p>2.4tr/tháng</p>
                        <span>{moment().fromNow()}</span>
                    </div>
                    
                </li>
                <li>Phòng trọ chính chủ cho thuê gần ĐHCN 
                    <div className="dt">
                        <p>2.4tr/tháng</p>
                        <span>{moment().fromNow()}</span>
                    </div>
                    
                </li>
                <li>Phòng trọ chính chủ cho thuê gần ĐHCN 
                    <div className="dt">
                        <p>2.4tr/tháng</p>
                        <span>{moment().fromNow()}</span>
                    </div>
                    
                </li>
                <li>Phòng trọ chính chủ cho thuê gần ĐHCN 
                    <div className="dt">
                        <p>2.4tr/tháng</p>
                        <span>{moment().fromNow()}</span>
                    </div>
                    
                </li>
                <li>Phòng trọ chính chủ cho thuê gần ĐHCN 
                    <div className="dt">
                        <p>2.4tr/tháng</p>
                        <span>{moment().fromNow()}</span>
                    </div>
                    
                </li>
                <li>Phòng trọ chính chủ cho thuê gần ĐHCN 
                    <div className="dt">
                        <p>2.4tr/tháng</p>
                        <span>{moment().fromNow()}</span>
                    </div>
                    
                </li>
                <li>Phòng trọ chính chủ cho thuê gần ĐHCN 
                    <div className="dt">
                        <p>2.4tr/tháng</p>
                        <span>{moment().fromNow()}</span>
                    </div>
                    
                </li>
            </ul>
        </div>
      );
    }
}

export default News;