import React  from "react";
import  './style.css';
import { Component } from "react";
import { FilterFind } from '../../PublicComponent/FilterFind/index'
import { message, Pagination } from 'antd';
import News from '../../PublicComponent/NewsBoard/index'
import queryString from 'query-string'
import Aux from '../../others/HOC/auxiliary'
import NavBar from '../../PublicComponent/NavBar/index';
import { List } from './component/list'
import { Spin, Breadcrumb } from 'antd';
import { SearchMotel, latestPost } from '../../api/api'
import { Link } from "react-router-dom";
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

    // lọc phòng trọ
    searchMotel = async (dst, ward, type, arc, prc) =>{
        const res = await SearchMotel(dst, ward, type, arc, prc)
        console.log(res)
        this.setState(
        { 
            loading: false,
        })
        if(res)
        {
            this.setState(
            { 
                results: res.data.results,
                countResult: res.data.count,
                loading: false,
                pagesize: parseInt(res.data.count/10)
            })
        }
        else{
            message.error('Failed');
        }
        
    }

    // lấy bài đăng mới nhất
    getLatestPost = async (page) =>{
        const res = await latestPost(page)
        console.log(res)
        this.setState({ 
            loading: false,
        })
        if(res)
        {
            if(res.status == 200){
                this.setState(
                { 
                    results: res.data.results,
                    countResult: res.data.count,
                    pagesize: parseInt(1 + res.data.count/10)
                })
            }
            else {
                message.error('Failed');
            } 
        }
        
        
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
    
    componentDidUpdate (prevProps) {
        if (prevProps.location.key !== this.props.location.key) {
            const value = queryString.parse(this.props.location.search)
            console.log(value)
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
    }

    render(){
    const { location, history } = this.props;

    return(
        <Aux>
            <NavBar location = {location} history = {history} home ={false}/>
            <div className="container">
                <Breadcrumb className="breadcrumb">
                    <Breadcrumb.Item><Link to='/home'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Tìm kiếm</Breadcrumb.Item>
                </Breadcrumb>
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




