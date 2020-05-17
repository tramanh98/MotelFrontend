import { Modal, Button, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import './style.css';
import moment from 'moment';
export default class Contract extends Component {
  state = {
    loading: false,
    visible: false,
  };

  
  
  render() {
      return(

        <div style={{margin: '20px 0'}}>
            <h4>Có thể bạn quan tâm</h4>
            <ul style={{padding: '0 0 0 20px'}}>
                <li>Mẫu hợp đồng cho thuê phòng trọ</li>
                <li>Cẩn thận các kiểu lừa đảo khi thuê phòng trọ</li>
                <li>Kinh nghiệm khi thuê phòng trọ Sinh viên</li>
            </ul>
            
        </div>
      );
    }
}
