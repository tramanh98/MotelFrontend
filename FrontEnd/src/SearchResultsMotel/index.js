import React from "react";
import  './style.css';
import { Component } from "react";
import FilterFind from '../component/FilterFind/index'
import Results from './component/results'

export default class MotelResults  extends Component {

    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3 find">
                    <FilterFind/>
                </div>
                <div className="col-lg-9">
                    <h3>Có 2536 chỗ được tìm thấy</h3>
                    <div className="results">
                        <Results/>
                        <Results/>
                        <Results/>
                        <Results/>
                        <Results/>

                    </div>
                </div>

            </div>
        </div>
        );
    
}
}




