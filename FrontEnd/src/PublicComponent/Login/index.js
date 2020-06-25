import { Drawer, Form, Modal, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Link, Redirect } from "react-router-dom";
import { useAuthContext } from "../../others/contexts/auth.context";
import { Spin, Switch, Alert } from 'antd';
import axios from 'axios';
import Aux from '../../others/HOC/auxiliary';
import AlertMessage from '../AlertMassage';
import If from '../../others/helper/if';
import { AuthContext } from '../../others/contexts/auth.context';
import './style.css'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
const { Option } = Select;



export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      uuid: "",
      MessageOpen: false,
      MessageText: "",
      // redirectToRefer: false,
      visible: false,
      loading: false
    }
  };
  // componentDidMount() {
  //   if(this.props.visible){
  //     this.setState({
  //       visible: true
  //     })
  //   } 
  // }

  static contextType = AuthContext;
  responseFacebook = async (response) => {
    console.log(response);
    const response2 = await axios.post(`http://127.0.0.1:8000/authgg/convert-token/`, {
      // access_token: response.accessToken
      grant_type: "convert_token",
      client_id:"2595169840730749",
      client_secret: "93fcc97b1a720b98a6df0462d6ac0ad5",
      backend: "facebook",
      token: response.accessToken
    });
    this.setState({
      loading: true
    })
    console.log(response2);
    const { data } = response2;
    const { user, onLogin } = this.context;
    if (typeof data.access_token !== "undefined") {
      console.log("login successful");
      this.setState({
        username: response.name,
        token: data.access_token,
        MessageOpen: false,
        visible: false,
      });
      if(this.props.visible){
        this.props.reset();
      }
      const dt = {  
                    iduser:'', 
                    fname:'', 
                    lname: '',
                    email: '',
                    typeToken: data.token_type,
                    image: response.picture.data.url,
                    username: response.name, 
                    token: data.access_token }
      onLogin({ user: dt });
    }
    this.setState({
      loading: false
    })
    // else {
    //   this.setState({ MessageOpen: true, MessageText: response.data.message });
    // }
  }

  responseGoogle = async (response) => {
    console.log(response);
    const response2 = await axios.post(`http://127.0.0.1:8000/authgg/convert-token/`, {

      // access_token: response.accessToken
      
        grant_type: "convert_token",
        client_id:"311307780250-ns2lg1103qoblsnbmklpr3f8c6d1v53e.apps.googleusercontent.com",
        client_secret: "_2iQp_APiWURPtKfiibkcvCY",
        backend: "google-oauth2",
        token: response.accessToken

    });
    console.log(response2);
    const { data } = response2;
    const { onLogin } = this.context;
    if (typeof data.access_token !== "undefined") {
      console.log("login successful");
      this.setState({
        username: response.profileObj.name,
        token: data.key,
        MessageOpen: false,
        visible: false,
      });
      if(this.props.visible){
        this.props.reset();
      }
      const dt = {  
                    iduser:'', 
                    fname:'', 
                    lname: '',
                    email: '',
                    image: response.profileObj.imageUrl,
                    typeToken: data.token_type,
                    username: response.profileObj.name, 
                    token: data.access_token 
                  }
      onLogin({ user: dt });
    }
    
  } 
  handleLogin = async (username1, password) => {
    const response = await axios.post(`http://127.0.0.1:8000/auth/login/`, {
      username: "",
      email: username1,
      password: password
    });
    const { data } = response;
    const { user, onLogin } = this.context;
    console.log("response from server:", response);
    if (typeof data.key !== "undefined") {
      console.log("login successful");
      this.setState({
        username: data.user.username,
        token: data.key,
        MessageOpen: false,
        visible: false,
      });
      if(this.props.visible){
        this.props.reset();
      }
        
      const dt = {  iduser:data.user.pk, 
                    fname:data.user.first_name, 
                    lname: data.user.last_name,
                    image: data.user.image,
                    email: data.user.email,
                    typeToken: "Token",
                    username: data.user.username, 
                    token: data.key 
                  }
      onLogin({ user: dt });
    }
    else {
      this.setState({ MessageOpen: true, MessageText: response.data.message });
    }
  };
  handleClose = () => {
    this.setState({
      MessageOpen: false,
      MessageText: ""
    });
  }

  showDrawer() {
    this.setState({
      visible: true,
    });
  };

  onClose() {
    this.setState({
      visible: false,
    });
    if(this.props.visible){
      this.props.reset();
    }
    console.log(this.state.visible);
  };

  render() {
    const { MessageOpen, MessageText } = this.state;
    const { visible } = this.props;
    const { user } = this.context;
    console.log(this.state.visible);

    

    
    const customStyle ={
      padding: "10px 30px",
      color: "black",
      fontWeight: "bold",
      margin:"10px 30px"
    }
    return (
      <Aux>
        <div className="flowup">
          <Button type="link" className="btnlgin" onClick={() => this.showDrawer()}>ĐĂNG NHẬP</Button>
          
            <Modal
              title="Login"
              width={500}
              onCancel={()=>this.onClose()}
              visible={this.state.visible || visible}
              bodyStyle={{ paddingBottom: 20 }}
              footer={null}
              z-index={10000}
            >
              <Spin spinning={this.state.loading}>
              <div id="head-login">
                <h4>With your social network</h4>
                <div id="btn-network-social">
                    <FacebookLogin
                      appId="2595169840730749"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={this.responseFacebook} 
                      cssClass="my-facebook-button-class"
                      textButton="Facebook"
                    />
                    <GoogleLogin
                      clientId="311307780250-ns2lg1103qoblsnbmklpr3f8c6d1v53e.apps.googleusercontent.com"
                      // buttonText="Login"
                      onSuccess={this.responseGoogle}
                      // onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      className="google-button"
                      render={renderProps => (
                        <button onClick={renderProps.onClick} style={customStyle}>Google</button>
                      )}
                    >
                    </GoogleLogin>
                    {/* <button type="button" class="btn btn-primary">Facebook</button> */}
                </div>
              </div>
              <LoginForm login={this.handleLogin} />
              </Spin>
            </Modal>
          <If condition={MessageOpen} component={AlertMessage} props={
            {
              open: MessageOpen,
              text: MessageText,
              onClose: this.handleClose,
              type: 'warning',
            }
          } />
        </div>
      </Aux>
    );
  }
}