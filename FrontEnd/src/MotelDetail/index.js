import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import { Component } from "react";
import ImageGallery from 'react-image-gallery';
// import Comments from './component/comments';
import FilterFind from '../PublicComponent/FilterFind/index';
// import Detail from './component/detail';
import { Col, Tag, Row, Breadcrumb } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FacebookFilled,PhoneFilled } from '@ant-design/icons';
import GeneralInfor from './component/InforGeneral'
import SliderMotel from '../PublicComponent/slider/index'
import Aux from "../others/HOC/auxiliary";
import NavBar from '../PublicComponent/NavBar/index';

export default class MotelDetail extends Component {
    constructor(props) {
        super(props);
      }

    render() {

        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]
        return (
            <Aux>
                <NavBar />
                <div className="container">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="">Phòng trọ</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="">Phòng trọ quận Bình Thạnh</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Phòng trọ phường 1</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterFind typeft={true} />
                        </div>
                        <div className="col-lg-9">
                            <div className="row ml-title">
                                <div className="col-lg-9">
                                    <h3>Cho thuê phòng trọ</h3>
                                </div>
                            </div>
                            <div>
                                <div className="location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>21/45/52 đường số 8, Phường 8, Quận 8, HCM</span>
                                </div>
                            </div>

                            <div className="images">
                                <ImageGallery items={images} />
                            </div>
                            <hr/>
                            <div>
                                <h4>Thông tin cơ bản</h4>
                                <GeneralInfor/>
                            </div>
                            <hr/>
                            <div>
                                <h4>Thông tin mô tả</h4>
                                <div>
                                    <p>Only 400 metres from the sandy Bačvice Beach, Apartment Darka is set in a traditional stone house dating back from the 1891 and offers air-conditioned accommodation with free WiFi access. The property is 650 metres from the UNESCO-protected Palace of Diocletian.
                                    The apartment comprises a sofa and a flat-screen TV, as well as an equipped kitchen with a dining table. Featuring a shower, private bathroom also comes with a hairdryer.
                                    Split Ferry Port, where are also located the Main Bus and Train Station, is 550 metres away. Apartment Darka is 2.4 km from Poljud Stadium. Split Airport is at a distance of 25 km.
                                Đây là khu vực ở Split mà khách yêu thích, theo các đánh giá độc lập.</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="map">
                                <h4>Bản đồ</h4>
                                <div id="map-container-google-1" class="z-depth-1-half map-container-5" style={{ height: '400px' }}>
                                    <iframe src={'https://maps.google.com/maps?q=Madryt&t=&z=13&ie=UTF8&iwloc=&output=embed'} frameborder="1"
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




