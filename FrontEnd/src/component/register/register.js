import { Modal, Button, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";
const { Option } = Select;
class Register extends Component {
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
      <div>
        <button className="nav-link btnCol"  onClick={()=>this.showModal()}>ĐĂNG KÍ</button>
        <Modal
          visible={visible}
          title="Register"
          onOk={()=>this.handleOk()}
          onCancel={()=>this.handleCancel()}
          footer={[
            <Button key="back" onClick={()=>this.handleCancel()}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={()=>this.handleOk()}>
              Register
            </Button>,
          ]}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            >
                <Form.Item
                label="User name"
                name="Username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                label="Email"
                name="Email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>
        
                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
      </div>
    );
  }
}

export default Register;