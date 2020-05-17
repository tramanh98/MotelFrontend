import React, { Component} from 'react';
import NavBar from '../PublicComponent/NavBar/index';
import NavHead from '../PublicComponent/NavBar/navhead';
import { Layout } from 'antd';
import Aux from '../others/HOC/auxiliary'
import './style.css';
import FooterHead from '../PublicComponent/footer/footer'
const { Content, Footer } = Layout;
export const DefaultLayout = props => {
    return (
        <React.Fragment>
            <Layout>
                <Aux>
                    {props.children}
                </Aux>
                <FooterHead />
            </Layout>
        </React.Fragment>
    )
}