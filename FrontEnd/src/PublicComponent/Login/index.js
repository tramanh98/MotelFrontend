import { Drawer, Form, Modal, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Link, Redirect } from "react-router-dom";
import { useAuthContext } from "../../others/contexts/auth.context";
import axios from 'axios';
import Aux from '../../others/HOC/auxiliary';
import AlertMessage from '../AlertMassage';
import If from '../../others/helper/if';
import { AuthContext } from '../../others/contexts/auth.context';
import './style.css'
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
    }
  };
  static contextType = AuthContext;
  handleLogin = async (username1, password) => {
    const response = await axios.post(`http://127.0.0.1:8000/auth/login/`, {
      username: username1,
      email: "",
      password: password
    });
    const { data } = response;
    const { user, onLogin } = this.context;
    console.log("response from server:", response);
    if (typeof data.key !== "undefined") {
      console.log("login successful");
      this.setState({
        username: username1,
        token: data.key,
        MessageOpen: false,
        visible: false,
        // redirectToRefer: this.props.location.state ? true : false
      });
      this.props.reset();
      const dt = { username: username1, token: data.key }
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
    this.props.reset();
    console.log(this.state.visible);
  };

  render() {
    const { MessageOpen, MessageText } = this.state;
    const { visible } = this.props;
    const { user } = this.context;
    console.log(this.state.visible);

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
            <LoginForm login={this.handleLogin} />
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