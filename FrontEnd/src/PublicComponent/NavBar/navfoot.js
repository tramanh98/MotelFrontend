import { Menu, Input, Divider, Dropdown } from 'antd';
import React, { Component } from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './style.css'
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import dientich from '../../data/dientich.json'
import price from '../../data/price.json'
import Aux from '../../others/HOC/auxiliary'
const { Search } = Input;

  
  
export default class NavFoot extends Component {
    
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
                <nav className="navbar navbar-expand-sm sticky-top nv">
                    
                    <div className="navother">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link font-navbar" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link font-navbar" href="#" id="navbardrop" data-toggle="dropdown">
                                    Khu vực
                                </a>
                                <div className="dropdown-menu">
                                    <div className="row local" >
                                        {
                                            districts.map((dst, index) => (
                                                index!=0?
                                                <div className="col-lg-3">
                                                    <Link className="dropdown-item" to="/">{dst.name}</Link>
                                                </div>:''
                                                
                                            ))
                                        }
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link font-navbar" href="#" id="navbardrop" data-toggle="dropdown">
                                    Loại phòng
                                </a>
                                <div className="dropdown-menu">
                                {
                                    type.map((obj, index) => (
                                        index!=0?
                                        <Link className="dropdown-item" to="/">{obj}</Link>:''
                                    ))
                                }
                                </div>
                            </li> 
                            <li className="nav-item dropdown">
                                <a className="nav-link font-navbar" href="#" id="navbardrop" data-toggle="dropdown">
                                    Diện tích
                                </a>
                                <div className="dropdown-menu">
                                {
                                    dientich.map((obj, index) => (
                                        index!=0?
                                        <Link className="dropdown-item" to="/">{obj}</Link>:''
                                    ))
                                }
                                </div>
                            </li> 
                            <li className="nav-item dropdown">
                                <a className="nav-link font-navbar" href="#" id="navbardrop" data-toggle="dropdown">
                                    Mức giá
                                </a>
                                <div className="dropdown-menu">
                                {
                                    price.map((obj, index) => (
                                        index!=0?
                                        <Link className="dropdown-item" to="/">{obj}</Link>:''
                                    ))
                                }
                                </div>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link font-navbar" href="#">
                                    Tin mới nhất
                                </a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link font-navbar" href="https://phongtro123.com/huong-dan-su-dung">
                                    Hướng dẫn
                                </a>
                            </li> 
                        </ul> 
                    </div>
                    <Search
                        placeholder="Search"
                        onSearch={value => console.log(value)}
                        className="navbar-search"
                        style={{ width: 250, borderRadius: "20px" }}
                    />

 
                </nav>
           
        );
    }
}




