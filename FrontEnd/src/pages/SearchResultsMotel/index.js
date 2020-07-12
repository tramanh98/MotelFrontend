import React, { useState }  from "react";
import  './style.css';
import { Component } from "react";
import { FilterFind } from '../../PublicComponent/FilterFind/index'
import MotelFrame from '../../PublicComponent/ItemMotel/index'
import { Pagination } from 'antd';
import Filter from './component/filter';
import News from '../../PublicComponent/NewsBoard/index'
import queryString from 'query-string'
import Aux from '../../others/HOC/auxiliary'
import NavBar from '../../PublicComponent/NavBar/index';
import axios from 'axios';
import { List } from './component/list'
import PropTypes from "prop-types";
import { Spin, Alert } from 'antd';
import { SearchMotel, latestPost } from '../../api/api'
export default class MotelResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            loading: false,
            data: {},
            countResult: 0,
            pagesize: 0,
        }
    }

    searchMotel = async (dst, ward, type, arc, prc) =>{
        const res = await SearchMotel(dst, ward, type, arc, prc)
        console.log(res)
        this.setState(
            { 
                results: res.data.results,
                countResult: res.data.count,
                loading: false,
                pagesize: parseInt(res.data.count/10)
            }
        )

    }

    getLatestPost = async (page) =>{
        const res = await latestPost(page)
        console.log(res)
        this.setState(
            { 
                results: res.data.results,
                countResult: res.data.count,
                loading: false,
                pagesize: parseInt(1 + res.data.count/10)
            }
        )
        console.log("pagesize: " + this.state.pagesize)
    }

    componentDidMount() {
        const value = queryString.parse(this.props.location.search)
        this.setState({
            loading: true
        })
        if(value.q != undefined)
        {
            this.getLatestPost(1)
        }
        else{
            this.searchMotel(value.dst, value.ward, value.type, value.area, value.prc )
        }
        
        
    }

    search = (dst, ward, type, arc, prc) => {
        this.setState({
            loading: true
        })
        this.searchMotel(dst, ward, type, arc, prc )
    }
    changePage = (page, pagesize)=>{
        const value = queryString.parse(this.props.location.search)
        this.setState({
            loading: true
        })

        if(value.q != undefined)
        {
            this.getLatestPost(page)
        }
        else{
            this.searchMotel(value.dst, value.ward, value.type, value.area, value.prc )
        }
        console.log(page)
    }

    render(){
    const { location, history } = this.props;

    return(
        <Aux>
            <NavBar/>
            <div className="container">
                <div className="row srm-fr">
                    <div className="col-lg-3 find">
                        <FilterFind typeft={true} location = {location} history = {history} onSearch = {this.search}/>
                        <News className="lstnewpost" />
                    </div>
                    
                    <div className="col-lg-9">
                        <Spin tip="Loading..." spinning={this.state.loading}>
                            <h5 style={{marginTop: "20px"}}>Có {this.state.countResult} kết quả</h5>
                            
                            <div className="results">
                                <List results = {this.state.results} />
                            </div>
                            {
                                this.state.countResult == 0 ? '' :  
                                <Pagination onChange = {this.changePage} defaultCurrent={1} total={this.state.countResult} />

                            }
                        </Spin>
                    </div>
                    
                </div>
            </div>
        </Aux>
    );
    }
    
}




