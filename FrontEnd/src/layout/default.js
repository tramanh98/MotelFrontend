import React, { Component} from 'react';
import NavBar from '../component/NavBar/index';
import { Layout } from 'antd';
import './style.css';
import Banner from '../component/banner/Banner'
import Home from '../home/Home'
import FooterHead from '../component/footer/footer'
const { Content, Footer } = Layout;
export const DefaultLayout = props => {
    return (
        <React.Fragment>
            <Layout>
                <NavBar />
                <Content className="site-layout">
                    {props.children}
                </Content>
                <FooterHead />
                <Footer style={{ textAlign: 'center' }}>Copyright ©2020 All rights reserved | This template is made by dungtran.top</Footer>
            </Layout>
        </React.Fragment>
    )
}