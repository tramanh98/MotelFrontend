import React, { Component} from 'react';
import { Layout } from 'antd';
import './style.css';

const { Content, Footer } = Layout;
export default function ListMotels(props) {
    const motel = props.motel;
    
    return (
          
        <div class="col-lg-4">
            <div class="property-item">
                <div class="pi-pic set-bg">
                    <div class="label">For rent</div>
                </div>
                <div class="pi-text">
                    <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                    <div class="pt-price">{motel.price}<span>/month</span></div>
                        <h5><a href="#">{motel.Title}</a></h5>
                    <p><span class="icon_pin_alt"></span>{motel.address}</p>
                    <ul>
                        <li><i class="fa fa-object-group"></i> 2, 283</li>
                        <li><i class="fa fa-bathtub"></i> 03</li>
                        <li><i class="fa fa-bed"></i> 05</li>
                        <li><i class="fa fa-automobile"></i> 01</li>
                    </ul>
                    <div class="pi-agent">
                        <div class="pa-item">
                            <div class="pa-info">
                                <img src='./img/property/posted-by/pb-1.jpg' alt="" />
                                <h6>
                                    {motel.owner}
                                </h6>
                            </div>
                            <div class="pa-text">
                                {motel.nbphone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}