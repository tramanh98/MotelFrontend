import React, { Component} from 'react';
import { Layout } from 'antd';
import './style.css';
import OwlCarousel from 'react-owl-carousel2';
import logo from '../Home#TypeMotel/cat-1.jpg';
import ListMotels from './listMotel';
const { Content, Footer } = Layout;
export default class MotelType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMotels: [
                {
                    price: 1245368,
                    Title: "Cho thuê phòng trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                },
                {
                    price: 256384,
                    Title: "Cho thuê phòng trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                },
                {
                    price: 7528643,
                    Title: "Cho thuê phòng trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                },
                {
                    price: 7528643,
                    Title: "Cho thuê phòng trọ",
                    address: "21/15 trương định quận 1",
                    owner: "Nguyen Van A",
                    nbphone: "0122456839",
                }
            ]
        };
      }


    render()
    {
        const options = {
            items: 4,
            nav: true,
            rewind: true,
            autoplay: true,
            margin: 8,
            navText: ["<i class='fas fa-chevron-circle-left'></i>","<i class='fas fa-chevron-circle-right'></i>"]
        };
        const listItems = this.state.listMotels.map((item,index) =>
            <ListMotels key={index} motel={item} />
        );
        return (

            <div id="service" class="section-padding">
                <div class="container">
                <div class="row try">
                    <h1>Tìm theo loại nhà trọ</h1>
                    <OwlCarousel options={options} >
                        <div><img src="./img/categories/cat-1.jpg"alt="Quantrimang.com" /></div>
                        <div><img src="./img/categories/cat-2.jpg"alt="Quantrimang.com" /></div>
                        <div><img src="./img/categories/cat-3.jpg"alt="Quantrimang.com" /></div>
                        <div><img src="./img/categories/cat-4.jpg"alt="Quantrimang.com" /></div>
                        <div><img src="./img/categories/cat-5.jpg"alt="Quantrimang.com" /></div>
                        
                    </OwlCarousel>
                </div>
                <h1>Nhà trọ được yêu thích</h1>
                    
                <div class="row">
                    {listItems}
                    
                </div>
                </div>
            </div>
        )
    }
}