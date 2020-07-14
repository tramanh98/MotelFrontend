import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import './style.css'
import axios from 'axios';
import MotelFrame from '../../../PublicComponent/ItemMotel/index'
import {latestPost} from '../../../api/api'
export default class HomeList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
        
    };
    async componentDidMount() {
        const response = await latestPost(1)
        if(response.status == 200)
        {
            this.setState({
                results: response.data.results
            })
        }
        
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
