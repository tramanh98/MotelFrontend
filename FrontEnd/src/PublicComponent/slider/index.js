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
    <div className='fas fa-chevron-circle-right arrow-slider-next' 
    style={{  ...style, opacity: "0.9", display: "block",color: "white", alignItems: "center", borderRadius: '20%', position: "absolute", zIndex: '10' }} 
    onClick={onClick} >
    </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div className='fas fa-chevron-circle-left arrow-slider-prev' 
    style={{  ...style, opacity: "0.9", display: "block",color: "white", borderRadius: '20%', position: "absolute", zIndex: '10' }} 
    onClick={onClick} >
    </div>
    );
  }
export default class SliderMotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider_mb: ''
        }
      }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
      }
      
      updateWindowDimensions = () => {
        if ( window.innerWidth > 700 )
          this.setState({slider_mb: 4}); 
        else 
          this.setState({slider_mb: 2}); // size của mobile
      };
    render(){
    const list_img = [{
        type: "Nhà nguyên căn",
        queryType: "B",
        img: "../img/categories/cat-5.jpg"
    },
    {
        type: "Chung cư",
        queryType: "C",
        img: "../img/room/chungcu.jpg"
    },
    {
        type: "Phòng trọ",
        queryType: "A",
        img: "../img/room/phongtro.jpg"
    },
    {
        type: "Phòng ở ghép",
        queryType: "E",
        img: "../img/room/nhaoghep.jpg"
    },
    {
        type: "Mặt bằng",
        queryType: "D",
        img: "../img/room/matbang.jpg"
    }]
    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: this.state.slider_mb,
        className: "slider-slickcss",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const listImg = list_img.map((item, index)=>
        <div key={index} className="col">
            <div>
                <img src={item.img} alt="Quantrimang.com" />
                <Link to={`/results?dst=0&ward=0&type=${item.queryType}&prc=0&area=0`}>
                    <div className="content-slider">
                        <h5 style={{color: "white"}}>{item.type}</h5>
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
}
