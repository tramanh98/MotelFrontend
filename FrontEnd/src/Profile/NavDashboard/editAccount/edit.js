import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Avatar,Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AvatarUpload from './avatar'
import {Dashboard} from '../../index'
import { AuthContext } from "../../../others/contexts/auth.context";
import '../../style.css'
import axios from 'axios';
import {FormUD} from './form'
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;
export default class EditProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name:"",
            phone:"",
            avatar:"",
        }
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangeFname = this.onChangeFname.bind(this)
        this.onChangeLName = this.onChangeLName.bind(this)
        this.onFinish = this.onFinish.bind(this)
        this.onFinishPW = this.onFinishPW.bind(this)
    };

    onChangePhone = value =>{
        this.setState({
            phone: value
        });
    }

    onChangeFname = value =>{
        this.setState({
            first_name: value
        });
    }

    onChangeLName = value =>{
        this.setState({
            last_name: value
        });
    }
    static contextType = AuthContext;
    onFinish = async (values) => {
        console.log("đã submit");
        const { user } = this.context;
        const response = await axios.put(`http://127.0.0.1:8000/myprofile/`,
        {
            userprofile :{
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                phone: this.state.phone, 
                email: "haaaaaaa"  
            }
        },
        {
            headers: {
                Authorization: `${user.typeToken} ${user.token}`
            }
        }).then(response => {
            console.log(response);

        })
        .catch((error) => {
            console.log(error);
        }); 

      };
    static contextType = AuthContext;
    async componentDidMount() {
        const { user } = this.context;
        if (user) {
            const token = user.token;
            const typeToken = user.typeToken;
            
            this.setState({ user, loading: true });
            const response = await axios.get(`http://127.0.0.1:8000/myprofile`, 
            {
                headers: {
                    Authorization: `${typeToken} ${token}`
                    
                }
            }).then(response => {
                
                const { data } = response;
                this.setState({
                    first_name : data.profile.first_name,
                    last_name : data.profile.last_name,
                    email : data.profile.email,
                    phone : data.profile.phone,
                  });
                
                
            })
            .catch((error) => {
                console.log(error);
            }); 

        }
    }
    onFinishPW = async (values) => {
        console.log('Success:', values);
        const response = await axios.post(`http://127.0.0.1:8000/auth/password/change/`, {
            new_password1: values.oldpw,
            new_password2: values.pw1,
            old_password: values.pw2
          });
          console.log(response)
      };


    render() {
        const normFile = e => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          };
        const validateMessages = {
            required: '${label} is required!',
            types: {
              email: '${label} is not validate email!',
              number: '${label} is not a validate number!',
            }
          };
          



        return (
            <Dashboard>
                <div>
                    <h4>Thông tin tài khoản</h4>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Chỉnh sửa tài khoản" key="1">
                        <FormUD  
                            onChangePhone ={this.onChangePhone}
                            onChangeFname = {this.onChangeFname}
                            onChangeLName = {this.onChangeLName}
                            fname={this.state.first_name}
                            email = {this.state.email}
                            lname={this.state.last_name} 
                            phone = {this.state.phone}
                            onFinish = {this.onFinish}
                            />
                        </TabPane>
                        <TabPane tab="Chỉnh sửa mật khẩu" key="2">
                            <Form
                            name="resetpassword"
                            onFinish={this.onFinishPW}
                            >
                                <div class="row">
                                    <div class="col-3">
                                        <label>Mật khẩu hiện tại</label>
                                    </div>
                                    <div class="col-9">
                                        <Form.Item
                                            name="oldpw"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <label>Mật khẩu mới</label>
                                    </div>
                                    <div class="col-9">
                                        <Form.Item
                                            name="pw1"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <label>Xác nhận mật khẩu</label>
                                    </div>
                                    <div class="col-9">
                                        <Form.Item
                                            name="pw2"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="btn-submit-profile">
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Cập nhập
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </TabPane>
                    </Tabs>
                    
                </div>
            </Dashboard>
        );
    }

}
