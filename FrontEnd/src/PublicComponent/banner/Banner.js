import React, { Component, useState } from 'react';
import './style.css';
import { Row, Col, Form, Select, Button,  Carousel} from 'antd';
import FilterFind from '../FilterFind/index'
const { Option } = Select;
class Banner extends Component {


  render() {
    return (
    <div className="ctn">
      <div className="banner">
        <img src="../img/banner/hcmbanner.jpg" alt="Norway" style={{width: '100%'}}></img>
 
      
        <div id="background-filter">
              <div id="bg-title">FIND YOUR MOTEL</div>
              <Form className="filter" name="complex-form" >
                  <FilterFind typeft={false} />
              </Form>
        </div>
        </div>
    </div>
        
    );
  }
}

export default Banner;
