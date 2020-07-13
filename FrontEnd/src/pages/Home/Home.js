import React from 'react';
import Banner from '../../PublicComponent/Banner'
import { MotelType } from './component/MotelType'
import Aux from '../../others/HOC/auxiliary'
import NavBar from '../../PublicComponent/NavBar';
const Home = (props) => {
    const { match, location, history } = props;
    return (
      <Aux>
        <NavBar location = {location} history = {history} home={true}/>
        <Banner location = {location} history = {history}/>
        <div className="home-container container" >
            <MotelType/>
        </div>
      </Aux>
        
    );
}

export default Home;
