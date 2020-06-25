import { Drawer, Button } from 'antd';
import { Menu, Input, Divider, Dropdown, Popover, Row, Col} from 'antd';
import React, { Component } from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './style.css'
import { Link } from "react-router-dom";
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import dientich from '../../data/dientich.json'
import price from '../../data/price.json'
import Aux from '../../others/HOC/auxiliary'
import Login from '../Login/index'
import Register from '../register/register'
import If from "../../others/helper/if";
import { AuthContext, useAuthContext } from "../../others/contexts/auth.context";
import Cardhm from '../Card/card';
const { SubMenu } = Menu;
const { Search } = Input;

const Loginus = props => (
    <Login {...props} />
);
const Registerus = () => (
    <Register />
);
const Profile = () => {
    const { onLogout } = useAuthContext();
    // const history = useHistory();
    const handleClick = () => {
        // history.push("/");
        onLogout();
    };

    return (
        <Aux>
            <h6>Tài khoản của tôi</h6>
            <div>
                    <Link to="/profile/index" className="subnav_link">
                        <Row gutter={[8,8]}>
                            <Col span={2}><i className="far fa-user"/></Col>
                            <Col span={21}>Quản lý tài khoản</Col>
                        </Row>
                    </Link>
                    <Link to="/profile/edit" className="subnav_link">
                        <Row gutter={[8,8]}>
                            <Col span={2}><i className="fas fa-user-edit"/></Col>
                            <Col span={21}>Chỉnh sửa tài khoản</Col>
                        </Row>
                    </Link>
                    <Link to="/posting" className="subnav_link">
                        <Row gutter={[8,8]}>
                            <Col span={2}><i className="far fa-paper-plane"/></Col>
                            <Col span={21}>Đăng phòng của bạn</Col>
                        </Row>
                    </Link>
                    <Link className="subnav_link" onClick={() => handleClick()}>
                        <Row gutter={[8,8]}>
                            <Col span={2}><i className="fas fa-sign-out-alt"/></Col>
                            <Col span={21}>Thoát</Col>
                        </Row>
                    </Link>
            </div>
        </Aux>

    );
};
export default class NavFoot extends React.Component {
  state = { visible: false, classNm: 'transcl sticky-top navbar navbar-expand-sm nv'};
  static contextType = AuthContext;
    componentDidMount() {
        console.log("đây có phải home: " + this.props.home)
        if(this.props.home){
            document.addEventListener("scroll", () => {
                document.scrollingElement.scrollTop > 20 ? 
                this.setState({ classNm: "navbar navbar-expand-sm sticky-top nv"}) : 
                this.setState({ classNm: "transcl sticky-top navbar navbar-expand-sm nv"});
                // this.setState({ classNm: backgroundcolor });
            });
        }
        else this.setState({ classNm: "navbar navbar-expand-sm sticky-top nv"})
    }
    
    // componentWillUnmount() {
    //     document.addEventListener("scroll", () => {
    //         document.scrollingElement.scrollTop > 20 ? 
    //         this.setState({ classNm: "navbar navbar-expand-sm sticky-top nv"}) : 
    //         this.setState({ classNm: "transcl sticky-top navbar navbar-expand-sm nv"});
    //         // this.setState({ classNm: backgroundcolor });
    //     });
    //   }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { user } = this.context;
    return (
            <nav className={this.state.classNm}  >
                    <div onClick={this.showDrawer} className="nav-mobile">
                        <div className="btn-menu-mobile"></div>
                        <div className="btn-menu-mobile"></div>
                        <div className="btn-menu-mobile"></div>
                    </div>
                    <Drawer
                    title="2HOME"
                    placement="left"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    bodyStyle={{ padding: 0 }}
                    width={300}
                    >
                        <div className="my-account-mobile">
                            <If condition={!user} component={Loginus}  props={{
                                visible: false}
                                }/>
                            <If condition={user} component={Profile}/>
                            <If condition={!user} component={Registerus} />
                        </div>
                        <hr style={{width: "100%"}}></hr>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 300, margin: 0 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                            key="sub1"
                            title={
                                <span>
                                <MailOutlined />
                                <span>Khu vực</span>
                                </span>
                            }
                            >
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Loại phòng">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title="Mức giá">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                            key="sub4"
                            title={
                                <span>
                                <SettingOutlined />
                                <span>Diện tích</span>
                                </span>
                            }
                            >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Drawer>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link font-navbar" href="#"><i className="fa fa-fw fa-home"></i></a>
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
                        size="small"
                    />

 
                </nav>
      
    );
  }
}