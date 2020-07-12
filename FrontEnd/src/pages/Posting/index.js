import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { Card, Avatar, Button, Radio } from 'antd';
import { Form, Input, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.css';
// import PicturesWall from './ImgUpload'
import Aux from '../../others/HOC/auxiliary'
import NavBar from '../../PublicComponent/NavBar';
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import dientich from '../../data/dientich.json'
import price from '../../data/price.json'
import { Select } from 'antd';
import { AuthContext } from '../../others/contexts/auth.context';
import { Checkbox } from 'antd';
import { withRouter, useHistory } from "react-router-dom";
import { uploadImg, uploadinfo } from './http';
import { Spin, Alert } from 'antd';
import PostMotel from './post'
import Demo from './update_post'
const { Option } = Select;
const { TextArea } = Input;
const children = [];


export default function Posts(props) {
    const { edit } = props
    let history = useHistory();
    function handleClick() {
        history.push("/home");
      }
        return (
            edit?
                <Aux>
                    <NavBar />
                    <PostMotel onf={handleClick} />
                </Aux>
            :
                <Aux>
                    <NavBar />
                    <Demo params={props.match.params.idPost} onf={handleClick} />
                </Aux>


        );

}
