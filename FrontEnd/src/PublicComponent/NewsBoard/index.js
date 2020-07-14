import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css'
import moment from 'moment';
import { latestPost } from '../../api/api'
import {ConvertPrc, ConvertTypeMT, convertLocal} from '../../data/convert'
export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }
    }
    async componentDidMount() {
        const response = await latestPost(1)
        if(response){
            if(response.status == 200){
                this.setState({
                    results: response.data.results.slice(0,5)
                })
            }
        }
        
    }
    render(){
        return(
            <div>
                <div className="latest-news">Tin mới đăng</div>
                <ul className="list-news" style={{padding: '0 0 0 20px'}}>
                    {
                        this.state.results.map((obj, index) =>
                            <div>
                                <li>
                                    <Link to={`/detail/${obj.id}`} className="subnav_link">{obj.title} 
                                        <div className="dt" >
                                            <p>{ConvertPrc(obj.price)} VND/tháng</p>
                                            <span>
                                                {new Date(Date.parse(obj.created_at)).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <hr className="dashed"/>
                            </div>
                        )}
                </ul>
            </div>
          );
    }

      
}
