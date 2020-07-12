import React from "react";
import { Link } from "react-router-dom";
import  '../style.css';
import { Component} from "react";
import { Drawer, Progress, Rate,Pagination, Avatar  } from 'antd';
import Cment from '../../PublicComponent/WriteComment/index'
export default class Comments extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            vsb: false,
            rate: 0,
            cm: [{
                name: 'John Doe',
                date: 'Posted on February 19, 2016',
                text: "We felt as being in our own house ! From arrival up until our departure, we had everything that we could ask for",
            },
            {
                name: 'John Doe',
                date: 'Posted on February 19, 2016',
                text: "We felt as being in our own house ! From arrival up until our departure, we had everything that we could ask for",
            },
            {
                name: 'John Doe',
                date: 'Posted on February 19, 2016',
                text: "We felt as being in our own house ! From arrival up until our departure, we had everything that we could ask for",
            },
            {
                name: 'John Doe',
                date: 'Posted on February 19, 2016',
                text: "We felt as being in our own house ! From arrival up until our departure, we had everything that we could ask for",
            },
            {
                name: 'John Doe',
                date: 'Posted on February 19, 2016',
                text: "We felt as being in our own house ! From arrival up until our departure, we had everything that we could ask for",
            }]
        };
      }


    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
    onClose = () => {
    this.setState({
        visible: false,
    });
    };

    showModal = () => {
        this.setState({
            vsb: true,
        });
    };

    handleOk = e => {
        this.setState({
            vsb: false,
        });
    };

    handleCancel = e => {
        this.setState({
            vsb: false,
        });
    };
    handleChange = number => {
        this.setState({rate: number});
      };

    render(){
        const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
        const { rate } = this.state;

        
        return(
            <div className="comments">
                <div className="recmm">
                    <div className="core">8.7</div>
                    <div className="bs-core">
                        <h4>Tuyệt vời</h4>
                        <p>77 đánh giá</p>
                    </div>
                </div>

                <div>
                    {this.state.cm.map((item) =>
                    <div className="media bdr p-3">
                        <div className="media-body">
                            <div className="identity">
                                <Avatar>U</Avatar>
                                <h6>{item.name}<br/><p><small><i>{item.date}</i></small></p></h6>
                            </div>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    )} 
                </div>

                <button type="button" onClick={() => this.showDrawer()} className="btn btn-outline-dark" style={{width: '90%'}}>Xem tất cả đánh giá</button>

                <Drawer
                title="Đánh giá"
                width={720}
                onClose={() => this.onClose()}
                visible={this.state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                >
                    <div>
                        <div className="recmm">
                            <div className="core">8.7</div>
                            <div className="bs-core">
                                <h4>Tuyệt vời</h4>
                                <p>77 đánh giá</p>
                            </div>
                            <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-outline-dark">Viết bình luận</button>
                        </div>

                        <h4>Review summary</h4>
                        <div style={{ width: 500 }}>
                            <lable style={{margin: '0'}}>Rất tốt </lable> 
                            <Progress strokeLinecap="square" percent={30}  />
                            <span style={{margin: '0'}}>Tốt </span>
                            <Progress strokeLinecap="square" percent={50}  />
                            <span style={{margin: '0'}}>Bình thường </span>
                            <Progress strokeLinecap="square" percent={70}/>
                            <span style={{margin: '0'}}>Tệ </span>
                            <Progress strokeLinecap="square" percent={99.9}/>
                            <span style={{margin: '0'}}>Kinh khủng </span>
                            <Progress strokeLinecap="square" percent={88}  />
                        </div>

{/************************* đây là phần các bình luận ***********************/}
                        
                        <div>
                            <Cment/>
                            <Cment/>
                            <Cment/>
                            <Cment/>
                            <Cment/>
                        </div>
                        <Pagination size="small" total={50} />
                      
                        
                    </div>
                </Drawer>

                {/* <Modal
                    title="Basic Modal"
                    visible={this.state.vsb}
                    onOk={()=>this.handleOk()}
                    onCancel={()=>this.handleCancel()}
                >
                    <h4>Trâm Anh</h4>
                    <span>
                        <Rate tooltips={desc} onChange={this.handleChange} value={rate}  />
                        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ''}
                    </span>
                </Modal> */}

                <div class="modal fade" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Đánh giá</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body">
                                <h4>Trâm Anh</h4>
                                <span>
                                    <Rate tooltips={desc} onChange={this.handleChange} value={rate}  />
                                    {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ''}
                                </span>
                                <div class="form-group">
                                    <label for="comment">Comment:</label>
                                    <textarea class="form-control" rows="5" id="comment"></textarea>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Post</button>
                            </div>


                        </div>
                    </div>
                </div>


            </div>


        );
        }
}