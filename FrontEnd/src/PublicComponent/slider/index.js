import React, { Component} from 'react';
import { Layout, Col, Row } from 'antd';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
    //   <div
    //     className={className}
    //     style={{ ...style, display: "block", borderRadius: '10%' }}
    //     onClick={onClick}
    //   />
    <div className='fas fa-chevron-circle-right' 
    style={{  ...style, opacity: "0.7", display: "block",color: "white", alignItems: "center", right: "-10px", borderRadius: '20%', fontSize:'40px', position: "absolute", top:"35%", zIndex: '10' }} 
    onClick={onClick} >
    </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    //   <div
    //     className={className}
    //     style={{  ...style, display: "block", borderRadius: '20%', fontSize:'56px', width: "100px", backgroundColor: "red" }}
    //     onClick={onClick}
    //   ></div>
    <div className='fas fa-chevron-circle-left' 
    style={{  ...style, opacity: "0.7", display: "block",color: "white",left: "-10px", borderRadius: '20%', fontSize:'40px', position: "absolute", top:"35%", zIndex: '10' }} 
    onClick={onClick} >
    </div>
    );
  }
export default function SliderMotel () {
    const list_img = [{
        type: "Nhà nguyên căn",
        queryType: "can-ho",
        img: "../img/categories/cat-5.jpg"
    },
    {
        type: "Chung cư",
        queryType: "chung-cu",
        img: "../img/room/chungcu.jpg"
    },
    {
        type: "Phòng trọ",
        queryType: "nha-tro",
        img: "../img/room/phongtro.jpg"
    },
    {
        type: "Phòng ở ghép",
        queryType: "nha-o-ghep",
        img: "../img/room/nhaoghep.jpg"
    },
    {
        type: "Mặt bằng",
        queryType: "mat-bang",
        img: "../img/room/matbang.jpg"
    }]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 2,
        className: "slider-slickcss",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const listImg = list_img.map((item, index)=>
        <div className="col">
            <div>
                <img src={item.img} alt="Quantrimang.com" />
                <Link to={'/results?type=' + item.queryType}>
                    <div class="content-slider">
                        <h5 style={{color: "white"}}>{item.type}</h5>
                        <p style={{color: "white", margin: 0}}>45236 phòng</p>
                    </div>
                </Link>
            </div>
        </div>
    );
    return (
            <Slider {...settings}>
                {listImg}
            </Slider>     
                
    )
}
