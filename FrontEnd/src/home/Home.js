import React, { Component, useState } from 'react';
import '../css/style.css';
import { Row, Col, Divider, Form, Input, Select, Button} from 'antd';
import Banner from '../component/banner/Banner'
import MotelType from '../component/Home#TypeMotel/MotelType'
const { Option } = Select;
class Home extends Component {


  render() {
    return (
        <div>
            <Banner />
            <MotelType/>
        </div>
        
    );
  }
}

export default Home;
