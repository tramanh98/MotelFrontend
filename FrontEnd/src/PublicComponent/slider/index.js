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
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  ...style, display: "block", borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }
export default function SliderMotel () {
    const list_img = [{
        type: "Căn hộ",
        queryType: "can-ho",
        img: "../img/categories/cat-1.jpg"
    },
    {
        type: "Chung cư",
        queryType: "chung-cu",
        img: "../img/categories/cat-2.jpg"
    },
    {
        type: "Nhà trọ",
        queryType: "nha-tro",
        img: "../img/categories/cat-3.jpg"
    },
    {
        type: "Nhà ở ghép",
        queryType: "nha-o-ghep",
        img: "../img/categories/cat-4.jpg"
    },
    {
        type: "Kí túc xá",
        queryType: "ky-tuc-xa",
        img: "../img/categories/cat-5.jpg"
    }]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const listImg = list_img.map((item, index)=>
        <div className="col">
            <div className="ctn">
                <img src={item.img} alt="Quantrimang.com" />
                <Link to={'/results?type=' + item.queryType}>
                    <div class="content">
                        <h5 style={{color: "white"}}>{item.type}</h5>
                        <p style={{color: "white", Margin: 0}}>45236 phòng</p>
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
