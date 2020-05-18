import React, { Component, useState } from 'react';
import './style.css';
import { Row, Col, Form, Select, Button,  Carousel} from 'antd';
import FilterFind from '../FilterFind/index'
const { Option } = Select;
class Banner extends Component {


  render() {
    return (
    <div className="ctn">
      {/* <div className="banner">
        <div><img src="../img/banner.jpg" alt="Norway" style={{width: '100%', height: "100px"}}></img></div>

            
        </div> */}
        <div id="background-filter">
                <Form className="filter" name="complex-form" >
                    <FilterFind typeft={false} />
                </Form>
            </div>
    </div>
        
    );
  }
}

export default Banner;
