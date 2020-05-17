import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Avatar } from 'antd';
import { Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AvatarUpload from './avatar'
import {Dashboard} from '../../index'
import '../../style.css'
export default class EditProfile extends Component {
    render() {
        return (
            <Dashboard>
            <div className="edt">
                <h4>Thông tin tài khoản</h4>

                <div className="formm">
                    <div class="row">
                        <div class="col-3">
                            <label for="fname">Ảnh của bạn</label>
                        </div>
                        <div class="col-9">
                            <AvatarUpload/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="fname">First Name</label>
                        </div>
                        <div class="col-9">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="lname">Last Name</label>
                        </div>
                        <div class="col-9">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="email">Email</label>
                        </div>
                        <div class="col-9">
                            <input type="text" id="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <label for="email">Số điện thoại</label>
                        </div>
                        <div class="col-9">
                            <input type="text" id="phone" name="phone" placeholder="Number phone" />
                        </div>
                    </div>
                    <div class="btnsbm">
                        <input type="submit" value="Cập nhập" />
                    </div>
                </div>

            </div>
            </Dashboard>
        );
    }

}