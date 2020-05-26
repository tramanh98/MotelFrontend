import React from "react";
import { Link } from "react-router-dom";
import { withRouter, useHistory } from "react-router-dom";
import './style.css';
import If from "../../others/helper/if";
import { Component } from "react";
import Register from '../register/register'
import Login from '../Login/index';
import Cardhm from '../Card/card';
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
                <Cardhm />
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
        <div className="container navhead" style={{ margin: '0 auto', padding: '0' }}>
            <div class="d-flex align-items-center" style={{ padding: '0' }}>
                <div class="mr-auto p-2">
                    <Link className="navbar-brand" to="/home">2H<span><HomeOutlined /></span>ME</Link>
                </div>
                <div class="p-2">
                        {/* <Button onClick={this.handlePost}>Đăng phòng của bạn</Button> */}
                        <button onClick={this.handlePost} style={{width: "fit-content"}} type="button" class="btn btn-outline-dark">Đăng phòng của bạn</button>
                </div>
                <div class="p-2">
                    <If condition={!user} component={Loginus}  props={{
                        visible: visible, reset: this.resetVisible}
                        }/>
                    <If condition={user} component={ThongBao} />
                </div>
                <div class="p-2">
                    <If condition={!user} component={Registerus} />
                    <If condition={user} component={Profile} />
                </div>
            </div>

        </div>

    );
    }

}

export default withRouter(NavHead);


