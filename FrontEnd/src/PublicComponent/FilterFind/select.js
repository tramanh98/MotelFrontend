import React, { Component } from "react";
import { Row, Col} from 'antd';
import './style.css';


export default function Select(props) {

    
        const { type } = props;
        return type ? (
            <div>
                <label className="bt" for="district">{props.label}</label>
                <select value={props.value}  onChange={(e) => props.onChange(e)} class="custom-select">
                    {
                        props.isArr ? 
                        props.arrayData.map((obj, index) => ( 
                           <option value={index}>{obj}</option>
                        ))
                        :
                        props.arrayData.map((obj, index) => ( 
                            <option value={index}>{obj.name}</option>
                         ))
                    }
                </select>
            </div>
    ) : 
    (
            <Col span={4}>
                <label className="bt" for="district">{props.label}</label>
                <select value={props.value} onChange={(e) => props.onChange(e)} class="custom-select">
                    {
                        props.isArr ? 
                        props.arrayData.map((obj, index) => ( 
                            <option value={index}>{obj}</option>
                        ))
                        :
                        props.arrayData.map((obj, index) => ( 
                            <option value={index}>{obj.name}</option>
                        ))
                    }
                </select>
            </Col>
    )
}

