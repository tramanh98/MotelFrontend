import React from "react";
import { Link } from "react-router-dom";
import  './style.css';
import { Component } from "react";
import ImageGallery from 'react-image-gallery';
import Comments from './component/comments';
import FilterFind from '../component/FilterFind/index'


export default class MotelDetail extends Component {

    render(){
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
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <FilterFind />
                    <Comments />
                   

                </div>
                <div className="col-lg-9">
                    <div className="row ml-title">
                        <div className="col-lg-9">
                            <p>Căn hộ</p>
                            <h3>Golden Palace</h3>
                        </div>
                        <div className="col-lg-3"><button>Đặt căn hộ này</button></div>
                    </div>
                    <div>
                        <div className="location">Tình trạng: còn phòng</div>
                        <div className="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Sussex Square, Westminster Borough, London, W2 2SJ, Vương Quốc Anh</span> 
                        </div>
                    </div>

                    <div className="images">
                        <ImageGallery items={images} />
                    </div>
                    <div className="row intro">
                        <h3 className="col-md-12">Sơ lược về nhà trọ</h3>
                        <div className="col-md-8 quickview">
                            <p>Only 400 metres from the sandy Bačvice Beach, Apartment Darka is set in a traditional stone house dating back from the 1891 and offers air-conditioned accommodation with free WiFi access. The property is 650 metres from the UNESCO-protected Palace of Diocletian.
                            The apartment comprises a sofa and a flat-screen TV, as well as an equipped kitchen with a dining table. Featuring a shower, private bathroom also comes with a hairdryer.
                            Split Ferry Port, where are also located the Main Bus and Train Station, is 550 metres away. Apartment Darka is 2.4 km from Poljud Stadium. Split Airport is at a distance of 25 km.
                            Đây là khu vực ở Split mà khách yêu thích, theo các đánh giá độc lập.</p>
                        </div>
                        <div className="col-md-4 map">
                            <div id="map-container-google-1" class="z-depth-1-half map-container-5" style={{height: '250px'}}>
                                <iframe src={'https://maps.google.com/maps?q=Madryt&t=&z=13&ie=UTF8&iwloc=&output=embed'} frameborder="1"
                                style={{border: '0'}} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="convenient">
                        <h3>Một số tiện ích</h3>
                        <div><i class="fas fa-parking"></i><span>Chỗ đỗ xe</span></div>
                        <div><i class="fas fa-wifi"></i><span>Internet</span></div>
                        <div><i class="fas fa-bed"></i><span>Giường ngủ</span></div>
                        <div><i class="fab fa-algolia"></i><span>Giặt sấy</span></div>
                        <div><i class="far fa-snowflake"></i><span>Điều hòa</span></div>
                        <div><i class="fas fa-utensils"></i><span>Nhà bếp</span></div>
                        <div><i class="fas fa-tv"></i><span>Truyền thông {'&'} công nghệ</span></div>
                    </div>
                    <div className="requirements">
                        <h3>Quy tắc chung</h3>
                        <div><i class="fas fa-smoking-ban"></i><span>Cấm hút thuốc</span></div>
                        <div><i class="fas fa-paw"></i><span>Cấm nuôi vật nuôi</span></div>
                        <div><i class="fas fa-comment-slash"></i><span>Không ồn ào lúc 11h</span></div>
                    </div>
                    <div className="around">
                        <h3>Xung quanh chỗ ở có</h3>
                        <div><i class="fas fa-shopping-cart"></i><span>Siêu thị hoặc chợ</span></div>
                        <div><i class="fas fa-bus-alt"></i><span>Bến xe hoặc trạm xe</span></div>
                    </div>

            </div>

        </div>
        </div>
    );
}
}




