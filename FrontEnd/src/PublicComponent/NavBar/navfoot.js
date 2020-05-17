import { Menu, Input, Divider } from 'antd';
import React, { Component } from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './style.css'
const { SubMenu } = Menu;
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
                <nav class="navbar navbar-expand-sm sticky-top nv">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>    
                        </ul>
                    </div>
                    <Search
                    placeholder="Search"
                    onSearch={value => console.log(value)}
                    style={{ width: 250, borderRadius: "20px" }}
                    /> 
 
                </nav>
           
        );
    }
}




