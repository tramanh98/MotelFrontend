import { Modal, Button, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import React, { Component, useState } from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { RegistrationForm } from './RegisterForm'
import Aux from '../../others/HOC/auxiliary'
import { Spin } from 'antd';
import axios from 'axios';
import { Register_sv } from '../../api/api'
import { useAuthContext } from "../../others/contexts/auth.context";

export default function Register (props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { onLogin } = useAuthContext();

  const showModal = () => {
    setVisible(true)
  };

  const handleCancel = () => {
    setVisible(false)
  };

  const createAcc = async (values) =>{
    const res = await Register_sv(values, onLogin)
    console.log(res)
    setVisible(false)
    setLoading(false)
  }

  const register = (values) => {
    setLoading(true)
    createAcc(values)
  }

    return (
      <Aux>
        <div>
          <Button type="link" className="btnlgin" onClick={showModal}>ĐĂNG KÍ</Button>
          <Modal
            visible={visible}
            title="Register"
            onCancel={handleCancel}
            footer={null}
          >
            <Spin tip="Register..." spinning={loading}>
                <RegistrationForm register={register}/>
            </Spin>
          </Modal>
        </div>
      </Aux>
    );

}
