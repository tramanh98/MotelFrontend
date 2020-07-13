import React, { Component, useState } from "react";
import Select from './select';
import './style.css'
import { Slider, Button, Row, Col, Form } from 'antd';
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import dientich from '../../data/dientich.json'
import price from '../../data/price.json'
import PropTypes from "prop-types";
export const FilterFind = (props) =>  {

        const [IDdst, setIDdst] = useState(0);
        const [IDward, setIDward] = useState(0);
        const [IDtype, setIDtype] = useState(0);
        const [Cst, setCst] = useState(0);
        const [Arc, setArc] = useState(0);
        
        const onChangePrice = event => {
            setCst(event.target.value)
        };
        const handleChangeDistrict = event => {
            setIDdst(event.target.value)
        }

        const handleChangeWard = event => {
            setIDward(event.target.value)
        }
        const handleChangeService = event => {
            setIDtype(event.target.value)
        }
        const handleChangeArea = event => {
            setArc(event.target.value)
        }
        
        
        const onclick = () => {
            if(props.location.pathname != '/results'){
                props.history.push({
                    pathname: '/results',
                    search: '?dst='+ IDdst +'&ward='+ IDward+'&type='+ IDtype
                    +'&prc='+ Cst+'&area='+ Arc
                })

                
            }
            else{
                console.log("hello")
                props.onSearch(IDdst, IDward, IDtype, Arc, Cst)
            }
        }
        const { typeft } = props;
        const { location } = props;

        return typeft ? (
        <div className="fs-find">
            <h3>Tìm</h3>
            <div>
                <Select label={"Quận"} value={IDdst} arrayData={districts}
                onChange = {handleChangeDistrict} type={true} isArr={false}/>
            
                <Select label={"Phường"} value={IDward} arrayData={wards[IDdst].name}
                onChange = {handleChangeWard} type={true} isArr={true}/>
            
                <Select label={"Dịch vụ"} value={IDtype} arrayData={type}
                onChange = {handleChangeService} type={true} isArr={false}/>
            
                <Select label={"Diện tích"} value={Arc} arrayData={dientich}
                onChange = {handleChangeArea} type={true} isArr={true}/>

                <Select label={"Mức giá"} value={Cst} arrayData={price}
                onChange = {onChangePrice} type={true} isArr={true}/>

                <div style={{width: "100%", textAlign: "center"}}>
                    <button onClick={onclick} className="btn btn-success" type="button">Tìm</button>
                </div>
            </div>
        </div>

    ) :
    (
        <Row gutter={[0, 16]} justify="space-around">
            <Col xs={18} sm={20} md={4} lg={4} xl={4}>
                <Select label={"Quận"} value={IDdst} arrayData={districts}
                onChange = {handleChangeDistrict} type={false} isArr={false}/>
            </Col>
            <Col xs={18} sm={20} md={4} lg={4} xl={4}>
                <Select label={"Phường"} value={IDward} arrayData={wards[IDdst].name}
                onChange = {handleChangeWard} type={false}  isArr={true}/>
            </Col>
            <Col xs={18} sm={20} md={4} lg={4} xl={4}>
                <Select label={"Dịch vụ"} value={IDtype} arrayData={type}
                onChange = {handleChangeService} type={false}  isArr={false}/>
            </Col>
            <Col xs={18} sm={20} md={4} lg={4} xl={4}>
                <Select label={"Diện tích"} value={Arc} arrayData={dientich}
                onChange = {handleChangeArea} type={false} isArr={true}/>
            </Col>
            <Col xs={18} sm={20} md={4} lg={4} xl={4}>
                <Select label={"Mức giá"} value={Cst} arrayData={price}
                onChange = {onChangePrice} type={false} isArr={true}/>
            </Col>
            
            <Col className="btn-find" xs={10} sm={6} md={2} lg={2} xl={2}>
                <button onClick={onclick} style={{width: "100%", height: "100%", padding: 0, margin:0}} className="btn btn-success" type="button">Tìm</button>
            </Col>
        </Row>
    )

}