import React, { Component } from 'react';
import { Form, Input, Button, message, notification } from 'antd';
import {Dashboard} from '../../index'
import { AuthContext, useAuthContext } from '../../../../others/contexts/auth.context';
import '../../style.css'
import {FormUD} from './form'
import { Tabs, Radio } from 'antd';
import { getProfile, changePassword, editProf } from '../../../../api/api'
import If from '../../../../others/helper/if'
const { TabPane } = Tabs;
  


const RenderFormEdit = props =>{
    const { user, onLogin } = useAuthContext();
    const onFinish = async (values) => {
        console.log(values)
        const res = await editProf(values, user, `${user.typeToken} ${user.token}`, onLogin)
        if(res){
            message.success('Success');
        }
        
    };
    return (
        <FormUD  {...props}
            onFinish = {onFinish}
        />
    )
}

export default class EditProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rendEdit: false,
            infor: {
                email: "",
                first_name: "",
                last_name:"",
                phone:"",
                avatar:"",
            }
            
        }
        this.onChangePass = this.onChangePass.bind(this)
    };
    static contextType = AuthContext;
    /*** gọi API để lấy các thông tin của user (id, sdt, name, email) bao gồm các bài post của user đó ***/ 
    async componentDidMount() {
        const { user } = this.context;
        if (user) {
            const token = user.token;
            const typeToken = user.typeToken;
            const res = await getProfile(`${typeToken} ${token}`)
            const { profile } = res.data
            // console.log(res)
            if(res){
                this.setState({
                    infor:{
                        fname : profile.first_name,
                        lname : profile.last_name,
                        email : profile.email,
                        phone : profile.phone,
                    },
                    rendEdit: true
                }); 
            }
                
        }
    }
    /*----------------------------------------------------------*/



    /* gọi API để change password */
    onChangePass = async (values) => {
        console.log('Success:', values);
        const { user } = this.context;
        const response = await changePassword(values, `${user.typeToken} ${user.token}`) 
        if(response){
            if(response.status == 200)
            {
                message.success('Success');
            }
            
        }
        console.log(response)
    };
    /*----------------------------------------------------------*/


    render() {
       
          
        return (
            <Dashboard>
                <div>
                    <h4>Thông tin tài khoản</h4>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Chỉnh sửa tài khoản" key="1">
                            <If condition={this.state.rendEdit} component={RenderFormEdit} props = {this.state.infor}/>
                        </TabPane>
                        <TabPane tab="Chỉnh sửa mật khẩu" key="2">
                            <Form
                            name="resetpassword"
                            onFinish={this.onChangePass}
                            >
                                <div className="row">
                                    <div className="col-3">
                                        <label>Mật khẩu hiện tại</label>
                                    </div>
                                    <div className="col-9">
                                        <Form.Item
                                            name="oldpw"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Mật khẩu mới</label>
                                    </div>
                                    <div className="col-9">
                                        <Form.Item
                                            name="pw1"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Xác nhận mật khẩu</label>
                                    </div>
                                    <div className="col-9">
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
