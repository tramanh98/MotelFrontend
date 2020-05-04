import { Drawer, Form, Modal, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Link } from "react-router-dom";
const { Option } = Select;



class Login extends Component {
  state = { visible: false,
          visible2: true };

  showDrawer(){
    this.setState({
      visible: true,
    });
  };

  onClose(){
    this.setState({
      visible: false,
      visible2:false
    });
    console.log(this.state.visible);
  };

  render() {

    return (
      <div>
        <button className="nav-link btnCol" onClick={() => this.showDrawer()}>ĐĂNG NHẬP</button>
        <Modal
          title="Login to 2HOME"
          width={720}
          onClose={() => this.onClose()}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={() => this.onClose()}
                style={{ marginRight: 8 }}
              >
                Cancel
              </Button>
              <Button onClick={() => this.onClose()} type="primary">
                Login
              </Button>
            </div>
          }
        >
        <LoginForm />
          
        </Modal> 
      </div>
    );
  }
}
export default Login;