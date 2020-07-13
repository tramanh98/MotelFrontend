import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import './style.css'
import axios from 'axios';
import MotelFrame from '../../../PublicComponent/ItemMotel/index'
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
