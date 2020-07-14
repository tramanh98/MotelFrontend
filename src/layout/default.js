import React from 'react';
import { Layout } from 'antd';
import Aux from '../others/HOC/auxiliary'
import './style.css';
import {Footer} from '../PublicComponent/Footer'
export const DefaultLayout = props => {
    return (
        <React.Fragment>
            <Layout>
                <Aux>
                    {props.children}
                </Aux>
                <Footer />
            </Layout>
        </React.Fragment>
    )
}