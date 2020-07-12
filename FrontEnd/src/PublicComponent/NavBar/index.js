import React, { Component} from "react";
import './style.css';
import NavHead from './navhead';
import NavFoot from './navfoot'
import Aux from '../../others/HOC/auxiliary'


const NavBar = (props) => {

    return (
    <Aux>
        <NavHead/>
        <NavFoot home={props.home}/>
    </Aux>
    );
}

export default NavBar;


