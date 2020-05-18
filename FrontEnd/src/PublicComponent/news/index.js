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

        <div>
            <div className="latest-news">Tin mới đăng</div>
            <ul className="list-news" style={{padding: '0 0 0 20px'}}>
                <li>
                    <Link to="/detail/1234" className="subnav_link">Phòng trọ chính chủ cho thuê gần ĐHCN 
                        <div className="dt" >
                            <p>2.4tr/tháng</p>
                            <span>{moment().fromNow()}</span>
                        </div>
                    </Link>
                </li>
                <hr className="dashed"/>
                <li>
                    <Link to="/detail/1234" className="subnav_link">Phòng trọ chính chủ cho thuê gần ĐHCN 
                        <div className="dt" >
                            <p>2.4tr/tháng</p>
                            <span>{moment().fromNow()}</span>
                        </div>
                    </Link>
                </li>
                <hr className="dashed"/>
                <li>
                    <Link to="/detail/1234" className="subnav_link">Phòng trọ chính chủ cho thuê gần ĐHCN 
                        <div className="dt" >
                            <p>2.4tr/tháng</p>
                            <span>{moment().fromNow()}</span>
                        </div>
                    </Link>
                </li>
                <hr className="dashed"/>
                <li>
                    <Link to="/detail/1234" className="subnav_link">Phòng trọ chính chủ cho thuê gần ĐHCN 
                        <div className="dt" >
                            <p>2.4tr/tháng</p>
                            <span>{moment().fromNow()}</span>
                        </div>
                    </Link>
                </li>
                <hr className="dashed"/>
                <li>
                    <Link to="/detail/1234" className="subnav_link">Phòng trọ chính chủ cho thuê gần ĐHCN 
                        <div className="dt" >
                            <p>2.4tr/tháng</p>
                            <span>{moment().fromNow()}</span>
                        </div>
                    </Link>
                </li>
                
            </ul>
        </div>
      );
    }
}

export default News;