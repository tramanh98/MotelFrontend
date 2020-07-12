import React, { Component, useState } from 'react';
import './style.css';
import { Row, Col, Form, Select, Button,  Carousel} from 'antd';
import { FilterFind } from '../FilterFind/index'
const { Option } = Select;
const Banner = (props) => {

    return (
    <div className="ctn">
      <div className="banner">
          <img src="../img/banner/bannerhcm3.jpg" className="banner-scr" alt="Norway" style={{width: '100%'}}></img>
          <img src="../img/banner/bannerhcm2.jpg" className="banner-scr-mobile" alt="Norway" style={{width: '100%'}}></img>
        <div  id="background-filter">
              <div id="bg-title">FIND YOUR MOTEL</div>

              <Form  className="filter" name="complex-form" >
                  <FilterFind location = {props.location} history = {props.history} typeft={false} />
              </Form>
        </div>
      </div>
    </div> 
    );
}

export default Banner;
