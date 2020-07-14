import { Modal, Button } from 'antd';
import React, {  useState } from 'react';
import './style.css';
import { RegistrationForm } from './RegisterForm'
import Aux from '../../others/HOC/auxiliary'
import { Spin } from 'antd';
import { Register_sv, getProfile, restoreInforUser } from '../../api/api'
import { useAuthContext } from "../../others/contexts/auth.context";

export default function Register (props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, onLogin } = useAuthContext();

  const showModal = () => {
    setVisible(true)
  };

  const handleCancel = () => {
    setVisible(false)
  };

  const createAcc = async (values) =>{
    const res = await Register_sv(values, onLogin)
    if (user) {
      const token = user.token;
      const typeToken = user.typeToken;
      const res = await getProfile(`${typeToken} ${token}`)
      const { profile } = res.data
      restoreInforUser('', profile.first_name, profile.last_name,
                        profile.email, typeToken, '', '', token, onLogin)
      }
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
