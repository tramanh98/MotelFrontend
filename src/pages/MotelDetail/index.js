import React from "react";
import './style.css';
import { Component } from "react";
import axios from "axios"
import ImageGallery from 'react-image-gallery';
import { FilterFind } from '../../PublicComponent/FilterFind/index';
import { Breadcrumb } from 'antd';
import { FacebookFilled,PhoneFilled } from '@ant-design/icons';
import GeneralInfor from './component/InforGeneral'
import SliderMotel from '../../PublicComponent/Slider/index'
import Aux from "../../others/HOC/auxiliary";
import NavBar from '../../PublicComponent/NavBar/index';
import {ConvertPrc, ConvertTypeMT, convertLocal} from '../../data/convert'
import { Link } from "react-router-dom";
import {GetPost} from '../../api/api'
class MotelDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: {},
            user: {},
            local: {},
            prc: '',
            type: '',
            list_images: [],
            textlist: []
        }
        
    };
    /** gọi API để lấy tất cả các thông tin của phòng trọ **/
    async componentDidMount() {
        console.log("helll đây là trang detail")
        const response = await GetPost(this.props.match.params.idMotel)
        const { data } = response;
        console.log(data)
        this.setState({
            results: data,
            user: data.user,
            local: convertLocal(data.district, data.ward),
            prc: ConvertPrc(data.price),
            type: ConvertTypeMT(data.typeMotel)
        })
        this.setState({
            textlist: data.content.split('\n')
        })

        const arrImages = []
        for (var i = 0; i < data.images.length; i++) {
            arrImages.push({
                original: data.images[i].image,
                thumbnail: data.images[i].image,
                originalClass: 'contain-img-detail'
            })
        }
        this.setState({
            list_images: arrImages
        })

    }


    render(){
    const{ user, results, local } = this.state;
    const { location, history } = this.props;
        return (
            <Aux>
                <NavBar location = {location} history = {history}  home={false}/>
                <div className="container">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item><Link to='/home'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Detail</Breadcrumb.Item>
                        <Breadcrumb.Item>{results.id}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterFind typeft={true} location = {location} history = {history} />
                        </div>
                        <div className="col-lg-9">
                            <div className="ml-title">
                                <h3>{results.title}</h3>
                            </div>
                            <div>
                                <div className="location">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>{results.address}, {local.ward}, {local.dst}, HCM</span>
                                </div>
                            </div>

                            <div className="images">
                                <ImageGallery items={this.state.list_images} 
                                showPlayButton={false}
                                showFullscreenButton={false} />
                            </div>
                            <hr/>
                            <div>
                                <h4>Thông tin cơ bản</h4>
                                <GeneralInfor {...results} 
                                {...user}
                                local = {this.state.local} 
                                prc = {this.state.prc}
                                type = {this.state.type}/>
                            </div>
                            <hr/>
                            <div>
                                <h4>Thông tin mô tả</h4>
                                <div>
                                    <p> 
                                        { this.state.textlist.map((obj,key) =>
                                            <Aux key={key}>{obj} <br/></Aux>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <div className="map">
                                <h4>Bản đồ</h4>
                                <div id="map-container-google-1" className="z-depth-1-half map-container-5" style={{ height: '400px' }}>
                                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBGZm_nEMOJDCmcqIBTDw5cayVT5aAoVLw&q=${results.local_map},${local.ward},${local.dst},thanh+pho+ho+chi+minh,viet+nam`} frameborder="1"
                                        style={{ border: '0' }} allowfullscreen></iframe>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div style={{margin: '50px 0'}}>
                    <h3>Các loại phổ biến</h3>
                        <SliderMotel/> 
                    </div>
                </div>
            </Aux>
        );
    }

}

export default MotelDetail;




