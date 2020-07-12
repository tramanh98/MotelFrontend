import React from "react";
import { Link } from "react-router-dom";
import { withRouter, useHistory } from "react-router-dom";
import './style.css';
import If from "../../others/helper/if";
import { Component } from "react";
import Register from '../Register/register'
import {Login} from '../Login/index';
import { NavAvatar } from '../Avatar';
import { Badge, Popover, Button, Input } from 'antd';
import { MailOutlined, BellOutlined, HomeOutlined, BellFilled, SearchOutlined } from '@ant-design/icons';
import { AuthContext, useAuthContext } from "../../others/contexts/auth.context";

const Loginus = props => (
    <Login {...props} />
);
const Registerus = () => (
    <Register />
);
const ThongBao = () => {
    const text = <span>Thông báo</span>;
    const content = (
        <div>
            <p>Không có thông báo nào</p>

        </div>
    );
    return (
        <Popover placement="bottom" title={text} content={content} trigger="click">
            <Button type="link">
                <Badge count={5} dot>
                    <BellFilled style={{ fontSize: '25px', color: '#212529', padding: '0' }} />
                </Badge>
            </Button>
        </Popover>
    );
};

const Profile = () => {
    const { onLogout } = useAuthContext();
    const history = useHistory();
    const handleClick = () => {
        // history.push("/");
        onLogout();
    };

    const content = (
        <div>
            <Link to="/profile/index">
                <Button type="link">
                    Quản lý tài khoản
                </Button>
            </Link>
            
            <br />
            <Link to="/profile/edit">
            <Button type="link">
                Chỉnh sửa tài khoản
            </Button>
            </Link>
            
            <br />
            <Button type="link" onClick={() => handleClick()}>
                Thoát
            </Button>
        </div>
    );
    return (
        <Popover placement="bottom" content={content} trigger="click">
            <Button type="link">
                <NavAvatar />
            </Button>
        </Popover>
    );
};

class NavHead extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
        }
        this.handlePost = this.handlePost.bind(this);
        this.resetVisible = this.resetVisible.bind(this);

      };
    static contextType = AuthContext;
    handlePost = () => {
        const { user } = this.context;
        console.log(user)
        if(user){
            console.log(this.props.history)
            this.props.history.push('/posting');
            // console.log(user)
        }
        else {
            this.setState({visible: true})
        }
    }
    resetVisible = () =>{
        this.setState({visible: false})
    }
    render() {
        const { user } = this.context;
        const { visible } = this.state;


    return (
        <div className="container navhead">
            <div className="d-flex align-items-center">
                <div className="mr-auto p-2" style={{width: "300px"}}>
                    <Link className="navbar-brand" to="/home" style={{width: "fit-content"}}>
                        <img src="../img/logo/logo2.png" style={{width: "60%"}}/>
                    </Link>
                </div>
                <div className="p-2">
                        <button onClick={this.handlePost} style={{width: "fit-content"}} type="button" className="btn btn-outline-dark">Đăng phòng của bạn</button>
                </div>
                <div className="p-2">
                    <If condition={!user} component={Loginus}  props={{
                        visible: visible, reset: this.resetVisible}
                        }/>
                    <If condition={user} component={ThongBao} />
                </div>
                <div className="p-2">
                    <If condition={!user} component={Registerus} />
                    <If condition={user} component={Profile} />
                </div>
            </div>

        </div>

    );
    }

}

export default withRouter(NavHead);


