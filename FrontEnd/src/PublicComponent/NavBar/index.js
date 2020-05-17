import React, { Component} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './style.css';
import If from "../../others/helper/if";
import NavHead from './navhead';
import NavFoot from './navfoot'
import Aux from '../../others/HOC/auxiliary'


class NavBar extends Component {
    state = {
        classNm: "navbar navbar-expand-lg navbar-dark fixed-top "
    };
    // componentDidMount() {
    //     document.addEventListener("scroll", () => {
    //         const backgroundcolor = document.scrollingElement.scrollTop > 100 ? "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" : "navbar navbar-expand-lg navbar-dark fixed-top";
    //         this.setState({ classNm: backgroundcolor });
    //     });
    // }
    render() {
        return (
        <Aux>
            <NavHead/>
            <NavFoot/>
        </Aux>
        );
    }
}

export default NavBar;


