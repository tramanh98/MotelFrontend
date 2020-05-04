import React from "react";
import  '../style.css';
import { Component } from "react";


export default function Results() {

        return(
        <div className="row">
            <div className="col-lg-4 img">
                <img src="./img/room/room-2.jpg" alt="room1"/>
            </div>
            <div className="col-lg-6">
                <div className="mt-title">
                    <p>Căn hộ</p>
                    <h4>Golden Palace</h4>
                </div>
                <i class="fas fa-map-marker-alt"></i>
                <span>Sussex Square, Westminster Borough, London, W2 2SJ, Vương Quốc Anh</span>
                <p>Tọa lạc trong khu vực đậm chất bohemian nổi tiếng Santa Teresa, Sugar Loft nằm trong một tòa nhà được xây dựng từ những năm 1930 và đã được tân trang hoàn toàn. 
                </p>
            </div>
            <div className="col-lg-2">
                <h4>4.586.000</h4>
            </div>
        </div>

        );
    

}




