import React, { Component} from 'react';
import { Layout, Col, Row } from 'antd';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import News from '../../PublicComponent/news/index';
import MotelFrame from '../../PublicComponent/ItemMotel/index'
import Contract from '../../PublicComponent/contract/index'
import { Link } from "react-router-dom";
import SliderMotel from '../../PublicComponent/slider/index'

const { Content, Footer } = Layout;
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
export default class MotelType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMotels: [
                {
                    price: 1245368,
                    Title: "Tên nhà trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                },
                {
                    price: 256384,
                    Title: "Tên nhà trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                },
                {
                    price: 7528643,
                    Title: "Tên nhà trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                },
                {
                    price: 7528643,
                    Title: "Tên nhà trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                }
            ],
            list_img: [{
                type: "Căn hộ",
                queryType: "can-ho",
                img: "./img/categories/cat-1.jpg"
            },
            {
                type: "Chung cư",
                queryType: "chung-cu",
                img: "./img/categories/cat-2.jpg"
            },
            {
                type: "Nhà trọ",
                queryType: "nha-tro",
                img: "./img/categories/cat-3.jpg"
            },
            {
                type: "Nhà ở ghép",
                queryType: "nha-o-ghep",
                img: "./img/categories/cat-4.jpg"
            },
            {
                type: "Kí túc xá",
                queryType: "ky-tuc-xa",
                img: "./img/categories/cat-5.jpg"
            }]
        };
      }


    render()
    {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            swipeToSlide: true,
            slidesToShow: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };

        // const listItems = this.state.listMotels.map((item,index) =>
        //     <ListMotels key={index} motel={item} />
        // );
        const listImg = this.state.list_img.map((item, index)=>
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

            <div id="service" class="section-padding">
                    <h3 style={{fontWeight: 'bold'}}>Tìm theo loại nhà trọ</h3>
                    <div>
                        <SliderMotel/>
                    </div>
                    
                    <Row justify={"space-between"} style={{margin: '40px 0'}}>
                        <Col span={18} style={{padding: '0 10px 0 0'}}>
                            <div class="d-flex align-items-end">
                                <div class="mr-auto p-2"><h3 style={{fontWeight: 'bold', margin: 0, padding: 0}}>Nổi bật</h3></div>
                                <div class="p-2"><Link to={'/results?q=react&limit=3'}>Xem thêm</Link></div>
                                
                            </div>
                            <MotelFrame/>
                            <MotelFrame/>
                            <MotelFrame/>
                            <MotelFrame/>
                            <MotelFrame/>

                        </Col>
                        <Col span={6} style={{padding: '0 0 0 10px'}}>
                            <News/>
                            <img src="./img/ads.png" style={{width: '100%'}} />
                            <Contract/>
                        </Col>
                        
                        
                    </Row>
            </div>
        )
    }
}