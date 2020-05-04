import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import  './style.css';
import If from "../../helper/if";
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import { Component } from "react";
import Register from '../register/register'
import Login from '../Login/index';
const { Header } = Layout;


// export const Logout = () => {
//     const { onLogout } = useAuthContext();
//     const history = useHistory();
//     const handleClick = () => {
//         history.push("/");
//         onLogout();
//     };
//     return (
//         <button classNameName="btn btn-primary" onClick={() => handleClick()}>
//             Logout
//         </button>
//     );
// };

// const Profile = props => {
//     return (
//         <div style={{ display: "flex" }}>
//             <Link classNameName="nav-item nav-link active" to="/profile">
//                 {props.username}
//             </Link>
//             <img
//                 src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=404"
//                 width="40"
//                 height="40"
//                 classNameName="rounded-circle"
//                 alt=""
//             />
//         </div>
//     );
// };

class NavBar extends Component {
    state = { 
        classNm: "navbar navbar-expand-lg navbar-dark fixed-top "
     };
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = document.scrollingElement.scrollTop > 100 ? "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" : "navbar navbar-expand-lg navbar-dark fixed-top";
          this.setState({ classNm: backgroundcolor });
        });
    }
    render(){
    return (
        <React.Fragment> 
            <nav className={this.state.classNm} id="mainNav">
                <Link classNameName="navbar-brand" to="/home">2HOME</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars ml-1"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><Link className="nav-link" to="/home">Trang chủ<span className="sr-only">(current)</span></Link></li>
                            <li className="nav-item"><Login /></li>
                            <li className="nav-item"><Register /></li>
                        </ul>
                    </div>
                {/* 
                <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNameName="navbar-toggler-icon"></span>
                </button>
                <div classNameName="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul classNameName="navbar-nav">
                        <li classNameName="nav-item active">
                            <Link classNameName="nav-link" to="/home">Home <span classNameName="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Login />
                        </li>
                        <li className="nav-item">
                            <Register />
                        </li>
                    </ul>
                </div> */}
            </nav>
        </React.Fragment>
    );
}
}

export default NavBar;


