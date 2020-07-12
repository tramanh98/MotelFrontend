import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Avatar,Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../style.css'
import axios from 'axios';
import MotelFrame from '../../../PublicComponent/ItemMotel/index'

export const List = (props)=> {
        const { results } = props;
        console.log("Số lượng phòng trọ "+results.length)
        console.log(results)
        return (
            <div>
                {results.map((object,index) => 
                    <MotelFrame key={index} {...object} />
                )}
            </div>
        );

}
