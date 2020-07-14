import { Modal, Button } from 'antd';
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Aux from '../../others/HOC/auxiliary';
import './style.css'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Spin } from 'antd';
import {  useAuthContext } from "../../others/contexts/auth.context";
import { Login_Fb, Login_GG, Login_sv, getProfile, restoreInforUser } from '../../api/api'



export const Login = (props) => {

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, onLogin } = useAuthContext()
  /* login with facebook */

const  loginSocial = async (response, typeacc) => {
    console.log(response);
    
    if(typeacc == "facebook")
    {
      const dt = {  
        image: response.picture.data.url,
        username: response.name, }
      const res = await Login_Fb(response.accessToken, dt, onLogin)
      console.log(res)
    }
    else if (typeacc == "google")
    {
      const dt = {  
        image: response.profileObj.imageUrl,
        username: response.profileObj.name, 
      }
      const res = await Login_GG(response.accessToken, dt, onLogin)
      console.log(res)
    }
    
    setVisible(false)
    setLoading(false)
    if(props.visible){
      props.reset();
  }
}


  const lgin = async (username, password) =>{
    const response = await Login_sv(username, password, onLogin)
    console.log(response)

    if (user) {
        const token = user.token;
        const typeToken = user.typeToken;
        const res = await getProfile(`${typeToken} ${token}`)
        const { profile } = res.data
        restoreInforUser('', profile.first_name, profile.last_name,
                          profile.email, typeToken, '', '', token, onLogin)
    }
}

  const responseFacebook = (response) =>{
    setLoading(true)
    loginSocial(response,"facebook")
  }

  /* login with google */
  const responseGoogle = (response) => {
    setLoading(true)
    loginSocial(response, "google")   
  } 


  /* login  */
  const handleLogin = (username, password) => {
    setLoading(true)
    lgin(username, password)
  };
  /************** Kết thúc hàm login **************/


  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
    if(props.visible){
      props.reset();
    }
    setLoading(false)
  };

  const customStyle ={
    padding: "10px 30px",
    color: "black",
    fontWeight: "bold",
    margin:"10px 30px"
  }
    return (
      <Aux>
        <div className="flowup">
          <Button type="link" className="btnlgin" onClick={showDrawer}>ĐĂNG NHẬP</Button>
          
            <Modal
              title="Login"
              width={500}
              onCancel={onClose}
              visible={visible || props.visible}
              bodyStyle={{ paddingBottom: 20 }}
              footer={null}
              z-index={10000}
            >
              <Spin tip="Loading..." spinning={loading}>
              <div id="head-login">
                <h4>With your social network</h4>
                <div id="btn-network-social">
                    <FacebookLogin
                      appId="2595169840730749"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={responseFacebook} 
                      cssClass="my-facebook-button-class"
                      textButton="Facebook"
                    />
                    <GoogleLogin
                      clientId="311307780250-ns2lg1103qoblsnbmklpr3f8c6d1v53e.apps.googleusercontent.com"
                      onSuccess={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      className="google-button"
                      render={renderProps => (
                        <button onClick={renderProps.onClick} style={customStyle}>Google</button>
                      )}
                    >
                    </GoogleLogin>
                </div>
              </div>
              <LoginForm login={handleLogin} />
              </Spin>
            </Modal>
          
        </div>
      </Aux>
    );
  
}