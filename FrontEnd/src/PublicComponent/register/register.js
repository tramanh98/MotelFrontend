import { Modal, Button, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { RegistrationForm } from './RegisterForm'
import Aux from '../../others/HOC/auxiliary'
const { Option } = Select;

export default class Register extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleOk() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel(){
    this.setState({ visible: false });
  };

  
  render() {
    const { visible, loading } = this.state;
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
      };
    return (
      <Aux>
        <div>
          <Button type="link" className="btnlgin" onClick={() => this.showModal()}>ĐĂNG KÍ</Button>
          <Modal
            visible={visible}
            title="Register"
            onOk={()=>this.handleOk()}
            onCancel={()=>this.handleCancel()}
            footer={null}
          >
            <RegistrationForm />
          </Modal>
        </div>
      </Aux>
    );
  }
}
