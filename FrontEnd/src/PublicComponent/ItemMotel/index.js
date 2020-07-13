import './style.css';
import React from "react";
import { Col, Row, Tag } from 'antd';
import { EnvironmentTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import {ConvertPrc, ConvertTypeMT, convertLocal} from '../../data/convert'
export default function MotelFrame(props) {
    const { id, typeMotel, price, arc, district, ward, title, address, images } = props;
    const localObj = convertLocal(district, ward)
    const cst = ConvertPrc(price)
    const typeMT = ConvertTypeMT(typeMotel)
    const sfimages = [
            {
                original: images[0].image,
                originalClass: 'contain-img-frame'
            }
        ]
    
        return(
        <Row  className="item-mt">
            <Col span={8} className="img">
                <Link to={'/detail/'+ id} >
                    <ImageGallery items={sfimages} showNav={false} 
                        showThumbnails={false} 
                        showPlayButton={false}
                        showFullscreenButton={false} />
                </Link>
            </Col>
            <Col span={16} style={{padding: '0 10px'}}>
                <div className="mt-title">
                    <Link to={'/detail/'+ id} className="subnav_link" >
                        <h6>{title}</h6>
                    </Link>
                </div>
                <div className="mt-content">
                    <div>
                        {/* <EnvironmentTwoTone style={{fontSize: '20px', marginTop: "0"}} /> */}
                    Địa chỉ: {address}
                    </div>
                    <div>Khu vực: <span className="mt-price">{localObj.ward}, {localObj.dst}</span> </div>
                    <div>Loại: <Tag color="magenta">{typeMT}</Tag></div>
                    <div>Giá: <span className="mt-price">{cst} VND/tháng</span></div>
                    <div>Diện tích: <strong style={{color:"black"}}>{arc}m²</strong></div>
                </div>
                
            </Col>
        </Row>
        

        );
    

}




