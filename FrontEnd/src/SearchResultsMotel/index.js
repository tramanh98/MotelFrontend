import React from "react";
import  './style.css';
import { Component } from "react";
import FilterFind from '../PublicComponent/FilterFind/index'
import MotelFrame from '../PublicComponent/ItemMotel/index'
import { Pagination } from 'antd';
import Filter from './component/filter';
import queryString from 'query-string'
import Aux from '../others/HOC/auxiliary'
import NavBar from '../PublicComponent/NavBar/index';
export default class MotelResults  extends Component {

    render(){
        // const { query } = this.props.location;
        const value = queryString.parse(this.props.location.search)
        return(
            <Aux>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 find">
                            <FilterFind typeft={true}/>
                            {/* <Filter/> */}
                        </div>
                        <div className="col-lg-9">
                            <h3>Có 2536 chỗ được tìm thấy</h3>
                            <h5>Quận: {value.dst} Phường: {value.ward} Loại: {value.type}  Gía: {value.prc}  Diện tích: {value.area}</h5>
                            <div className="results">
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>
                                <MotelFrame/>

                            </div>
                            <Pagination defaultCurrent={6} total={500} />
                        </div>

                    </div>
                </div>
            </Aux>
        );
    
}
}




