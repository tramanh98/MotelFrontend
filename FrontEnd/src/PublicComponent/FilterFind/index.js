import React, { Component } from "react";
import Select from './select';
import './style.css'
import { Slider, Button, Row, Col, Form } from 'antd';
import { Link } from "react-router-dom";
import districts from '../../data/districts.json'
import wards from '../../data/wards.json'
import type from '../../data/type.json'
import dientich from '../../data/dientich.json'
import price from '../../data/price.json'
export default class FilterFind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IDdst: 0,
            IDward: 0,
            IDtype: 0,
            cst: 0,
            areas: 0,
        };
        this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
        this.handleChangeWard = this.handleChangeWard.bind(this);
        this.handleChangeService = this.handleChangeService.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeArea = this.handleChangeArea.bind(this);
    }
    onChangePrice = event => {
        this.setState({
            cst: event.target.value,
        });
    };
    handleChangeDistrict = event => {
        this.setState({
            IDdst: event.target.value,
        });
    }

    handleChangeWard = event => {
        this.setState({
            IDward: event.target.value,
        });
    }
    handleChangeService = event => {
        this.setState({
            IDtype: event.target.value,
        });
    }
    handleChangeArea = event => {
        this.setState({
            areas: event.target.value,
        });
    }
    handleSubmit = event => {
        console.log(this.state.IDdst);
        console.log(this.state.IDward);
        console.log(this.state.IDtype);
        console.log(this.state.inputValue);
        console.log(this.state.areas);
    } 

    render()
    {
        const { IDdst, IDward, IDtype, areas, cst } = this.state;
        const { typeft } = this.props;
       
        return typeft ? (
        <div className="fs-find">
            <h3>Tìm</h3>
            <div>
                <Select label={"Quận"} value={IDdst} arrayData={districts}
                onChange = {this.handleChangeDistrict} type={true} isArr={false}/>
            
                <Select label={"Phường"} value={IDward} arrayData={wards[IDdst].name}
                onChange = {this.handleChangeWard} type={true} isArr={true}/>
            
                <Select label={"Dịch vụ"} value={IDtype} arrayData={type}
                onChange = {this.handleChangeService} type={true} isArr={true}/>
            
                <Select label={"Diện tích"} value={areas} arrayData={dientich}
                onChange = {this.handleChangeArea} type={true} isArr={true}/>

                <Select label={"Mức giá"} value={cst} arrayData={price}
                onChange = {this.onChangePrice} type={true} isArr={true}/>

                <div style={{width: "100%", textAlign: "center"}}>
                    <Link to={'/results?dst='+this.state.IDdst +'&ward='+this.state.IDward+'&type='+this.state.IDtype
                        +'&prc='+this.state.cst+'&area='+this.state.areas}>
                        <button  class="btn btn-success" type="button">Tìm</button>
                    </Link>
                </div>
            </div>
        </div>

    ) :
    (
        <Row justify="space-around">
            <Col span={4}>
                <Select label={"Quận"} value={IDdst} arrayData={districts}
                onChange = {this.handleChangeDistrict} type={false} isArr={false}/>
            </Col>
            <Col span={4}>
                <Select label={"Phường"} value={IDward} arrayData={wards[IDdst].name}
                onChange = {this.handleChangeWard} type={false}  isArr={true}/>
            </Col>
            <Col span={4}>
                <Select label={"Dịch vụ"} value={IDtype} arrayData={type}
                onChange = {this.handleChangeService} type={false}  isArr={true}/>
            </Col>
            <Col span={4}>
                <Select label={"Diện tích"} value={areas} arrayData={dientich}
                onChange = {this.handleChangeArea} type={false} isArr={true}/>
            </Col>
            <Col span={4}>
                <Select label={"Mức giá"} value={cst} arrayData={price}
                onChange = {this.onChangePrice} type={false} isArr={true}/>
            </Col>
            
            <Col className="btn-find" span={1} >
                <Link to={'/results?dst='+this.state.IDdst +'&ward='+this.state.IDward+'&type='+this.state.IDtype
                +'&prc='+this.state.cst+'&area='+this.state.areas}>
                    <button style={{width: "100%", height: "100%", padding: 0, margin:0}} class="btn btn-success" type="button">Tìm</button>
                </Link>
            </Col>
        </Row>
    )
}
}
