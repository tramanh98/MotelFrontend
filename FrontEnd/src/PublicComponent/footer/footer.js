import React, { Component } from 'react';
import './style.css'

export default class FooterHead extends Component
{
    render()
    {
        return(
            <React.Fragment>
              <footer class="page-footer font-small unique-color-dark">
              <div style={{backgroundColor: '#caad6f'}}>
                <div class="container">

                  <div class="row py-4 d-flex align-items-center">

                    <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                      <h6 class="mb-0">KẾT NỐI VỚI CHÚNG TÔI</h6>
                    </div>
                    <div class="col-md-6 col-lg-7 text-center text-md-right">

                      <a class="fb-ic">
                        <i class="fab fa-facebook-f white-text mr-4"> </i>
                      </a>
                      <a class="tw-ic">
                        <i class="fab fa-twitter white-text mr-4"> </i>
                      </a>
                      <a class="gplus-ic">
                        <i class="fab fa-google-plus-g white-text mr-4"> </i>
                      </a>
                      <a class="li-ic">
                        <i class="fab fa-linkedin-in white-text mr-4"> </i>
                      </a>
                      <a class="ins-ic">
                        <i class="fab fa-instagram white-text"> </i>
                      </a>

                    </div>

                  </div>

                </div>
              </div>

              <div class="container text-center text-md-left mt-5">

                <div class="row mt-3">

                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 class="text-uppercase font-weight-bold">2HOME</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                      consectetur
                      adipisicing elit.</p>

                  </div>
                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class="text-uppercase font-weight-bold">Về 2home</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                    <p>
                      <a href="#!">Giới thiệu</a>
                    </p>
                    <p>
                      <a href="#!">Tuyển dụng</a>
                    </p>
                    <p>
                      <a href="#!">Truyền thông</a>
                    </p>
                    <p>
                      <a href="#!">Blog</a>
                    </p>

                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class="text-uppercase font-weight-bold">Hỗ trợ</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                    <p>
                      <a href="#!">Trung tâm trợ giúp</a>
                    </p>
                    <p>
                      <a href="#!">An toàn mua bán</a>
                    </p>
                    <p>
                      <a href="#!">Quy định cần biết</a>
                    </p>
                    <p>
                      <a href="#!">Liên hệ hỗ trợ</a>
                    </p>

                  </div>
                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 class="text-uppercase font-weight-bold">Liên lạc</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                    <p>
                      <i class="fas fa-home mr-3"></i> Khu phố 6, Phường Linh Trung, Quận Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam.</p>
                    <p>
                      <i class="fas fa-envelope mr-3"></i> support@2home.com</p>
                    <p>
                      <i class="fas fa-phone mr-3"></i> 0917.686.101 </p>

                  </div>

                </div>

              </div>
              <div class="footer-copyright text-center py-3">Copyright ©2020 All rights reserved | This template is made by
                <a href="https://mdbootstrap.com/"> dungtran.top</a>
              </div>

              </footer>
        </React.Fragment>
        );
    }
}