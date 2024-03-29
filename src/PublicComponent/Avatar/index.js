import React, { Component } from 'react'
import {  Avatar } from 'antd';
import './style.css'
import { useAuthContext } from "../../others/contexts/auth.context";
import { UserOutlined } from '@ant-design/icons';
export const NavAvatar = () => {
    const { user } = useAuthContext();
    const username = user.username;
    const image = user.image;
        if (user) {
            if( image)
            {
                return (
                    <div className="cter">
                        <Avatar src= {image} />
                        <div className="align">
                            {username.length < 2 ?  <p style={{ margin: '0' }}>{user.fname} {user.lname}</p>:
                            <p style={{ margin: '0' }}>{username}</p>
                            }
                            
                        </div>
                    </div>
                );
            }
            else 
                return (
                    <div className="cter">
                        <Avatar icon={<UserOutlined />} />
                        <div className="align">
                            {username.length < 2 ?  <p style={{ margin: '0' }}>{user.fname} {user.lname}</p>:
                            <p style={{ margin: '0' }}>{username}</p>
                            }
                        </div>
                    </div>
                    )
            
        }
        else      
            return (
                ''
        );

}