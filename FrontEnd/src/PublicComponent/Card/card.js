import React, { Component } from 'react'
import { Steps, Row, Col, Avatar, Button } from 'antd';
import './style.css'
import { AuthContext } from "../../others/contexts/auth.context";
import { UserOutlined } from '@ant-design/icons';
import SizeContext from 'antd/lib/config-provider/SizeContext';
const { Step } = Steps;
export default class Cardhm extends Component {
    static contextType = AuthContext;
    render() {
        const { user } = this.context;
        const username = user.username;
        const image = user.image;
        if (user) {
            if( image)
            {
                return (
                    <Button type="link" style={{padding: 0, margin: 0}}>
                        <div className="cter">
                            <Avatar src= {image} />
                            <div className="align">
                                <p style={{ margin: '0' }}>{username}</p>
                            </div>
                        </div>
                    </Button>
                );
            }
            else 
                return (
                    <Button type="link" style={{padding: 0, margin: 0}}>
                        <div className="cter">
                            <Avatar icon={<UserOutlined />} />
                            <div className="align">
                                <p style={{ margin: '0' }}>{username}</p>
                            </div>
                        </div>
                    </Button>
                    )
            
        }
        else      
            return (
                ''
        );

    }

}