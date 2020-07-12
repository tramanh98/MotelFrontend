import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Avatar,Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css'
import axios from 'axios';
import MotelFrame from '../../../PublicComponent/ItemMotel/index'
import { latestPost } from '../../Posting/http'
export default class HomeList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
        
    };
    async componentDidMount() {
        const response = await axios.get(`http://127.0.0.1:8000/api/motels/latest`).then(response => {
            console.log(response.data)
            this.setState({
                results: response.data.results
            })
        })
    }

    render() {
          
        return (
            <div>
                {this.state.results.map((object,index) => 
                    <MotelFrame key={index} {...object} />
            
                )}
            </div>
        );
    }

}
