import { Modal, Button, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import moment from 'moment';
export default class Contract extends Component {
  state = {
    loading: false,
    visible: false,
  };

  
  
  render() {
      return(

        <div style={{margin: '20px 0'}}>
            <div className="hfy">Hữu ích</div>
            <ul style={{padding: '0 0 0 20px'}}>
                <li><a href="https://phongtro123.com/news/hop-dong-thue-nha-tro-phong-tro">Mẫu hợp đồng cho thuê phòng trọ</a></li>
                <hr className="dashed"/>
                <li><a href="https://phongtro123.com/kinh-nghiem/kinh-nghiem-thue-phong-tro-tranh-bi-lua-gat.html">Cẩn thận các kiểu lừa đảo khi thuê phòng trọ</a></li>
                <hr className="dashed"/>
                <li><a href="https://phongtro123.com/kinh-nghiem/chia-se-10-kinh-nghiem-khi-thue-phong-tro-cho-sinh-vien.html">Kinh nghiệm khi thuê phòng trọ Sinh viên</a></li>
            </ul>
            
        </div>
      );
    }
}
