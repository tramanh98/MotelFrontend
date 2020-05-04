import React, { Component } from 'react';
import './style.css'

export default class FooterHead extends Component
{
    render()
    {
        return(
            <React.Fragment>
        <footer classNameName="contact-section">
            
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-info">
                            <div className="ci-item">
                                <div className="ci-icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="ci-text">
                                    <h5>Địa Chỉ</h5>
                                    <p>KTX Khu A ĐHQG TP.HCM, Khu Phố 6, Đông Hòa, Thủ Đức, Bình Dương</p>
                                </div>
                            </div>
                            <div className="ci-item">
                                <div className="ci-icon">
                                    <i className="fa fa-mobile"></i>
                                </div>
                                <div className="ci-text">
                                    <h5>Điện Thoại</h5>
                                    <ul>
                                        <li>96-69-69</li>
                                        <li>125-668-886</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ci-item">
                                <div className="ci-icon">
                                    <i className="fa fa-headphones"></i>
                                </div>
                                <div className="ci-text">
                                    <h5>Hỗ trợ</h5>
                                    <p>Support.abc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 cs-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.128289908638!2d106.80503545059757!3d10.877845792214735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5f4e477e9%3A0x29d5aeb365cee20b!2sKTX%20Khu%20A%20%C4%90HQG%20TP.HCM!5e0!3m2!1svi!2s!4v1586308628738!5m2!1svi!2s" width="600" height="450" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
        </footer>
        </React.Fragment>
        );
    }
}