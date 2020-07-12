import React, { Component } from "react";
import { Row, Col} from 'antd';
import './style.css';
import Aux from '../../others/HOC/auxiliary'


export default function Select(props) {

    
        const { type } = props;
        return type ? (
            <div>
                <label className="bt" for="district">{props.label}</label>
                <select value={props.value}  onChange={(e) => props.onChange(e)} className="custom-select">
                    {
                        props.isArr ? 
                        props.arrayData.map((obj, index) => ( 
                           <option key={index} value={index}>{obj}</option>
                        ))
                        :
                        props.arrayData.map((obj, index) => ( 
                            <option key={index} value={obj.type}>{obj.name}</option>
                         ))
                    }
                </select>
            </div>
    ) : 
    (
        <Aux>
            {/* <label className="bt" for="district">{props.label}</label> */}
            <select value={props.value} onChange={(e) => props.onChange(e)} className="custom-select">
                {
                    props.isArr ? 
                    props.arrayData.map((obj, index) => ( 
                        <option key={index} value={index}>{obj}</option>
                    ))
                    :
                    props.arrayData.map((obj, index) => ( 
                        <option key={index} value={obj.type}>{obj.name}</option>
                    ))
                }
            </select>
        </Aux>
    )
}

