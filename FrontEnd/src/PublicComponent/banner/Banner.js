import React, { Component, useState } from 'react';
import './style.css';
import { Row, Col, Form, Select, Button,  Carousel} from 'antd';
import FilterFind from '../FilterFind/index'
const { Option } = Select;
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bannerdsk: ''
    };
}
componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener("resize", this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowDimensions);
}

updateWindowDimensions = () => {
  if ( window.innerWidth > 700 )
    this.setState({bannerdsk: true}); 
  else 
    this.setState({bannerdsk: false}); 
};
// componentWillMount(){
//   if ( window.innerWidth > 700 )
//     this.setState({bannerdsk: true}); 
//   else this.setState({bannerdsk: false}); 

// }



  render() {
    return (
    <div className="ctn">
      <div className="banner">
        {
          this.state.bannerdsk ? 
          <img src="../img/banner/hcmbanner.jpg" alt="Norway" style={{width: '100%'}}></img> : 
          <img src="../img/banner/bannerhcm2.jpg" alt="Norway" style={{width: '100%'}}></img>
        }
        
      
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
