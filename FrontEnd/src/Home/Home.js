import React, { Component} from 'react';
import Banner from '../PublicComponent/banner/Banner'
import MotelType from './component/MotelType'
import Aux from '../others/HOC/auxiliary'
import NavBar from '../PublicComponent/NavBar/index';
class Home extends Component {


  render() {
    return (
      <Aux>
        <NavBar home={true}/>
        <Banner />
        <div className="container">
            
            <MotelType/>
        </div>
      </Aux>
        
    );
  }
}

export default Home;
