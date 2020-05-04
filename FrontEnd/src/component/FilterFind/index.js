import React, { Component } from "react";

const districtData = ['---------','Quận 1', 'Quận 2','Quận Bình Tân','Quận Tân Phú','Quận Thủ Đức'];
const wardData = [
    ['-----------'],
    ['Phường Bến Nghé', 'Phường Bến Thành', 'Phường Cầu Kho','Phường Cầu Ông Lãnh'],
    ['Phường An Khánh', 'Phường An Lợi Đông', 'Phường An Phú'],
    ['Phường An Lạc','Phường Bình Hưng Hòa','Phường Bình Trị Đông'],
    ['Phường Hiệp Tân','Phường Hoà Thạnh','Phường Phú Thọ Hoà'],
    ['Phường Bình Chiểu','Phường Bình Thọ','Phường Hiệp Bình Chánh'] 
];
const serviceType = ['----------','Chung cư','Căn hộ','Nhà trọ','Phòng ở ghép','Kí túc xá'];
const price = 100000;
const area = 1000;

export default class FilterFind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            district: 0,
            ward: 0,
            service: 0,
            price:0
        };

        this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
        this.handleChangeWard = this.handleChangeWard.bind(this);
        this.handleChangeService = this.handleChangeService.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDistrict(event) {
        this.setState({
            district: event.target.value,
            

        });
    }

    handleChangeWard(event) {
        this.setState({
            ward: event.target.value,
        });
    }
    handleChangeService(event)
    {
        this.setState({
            service: event.target.value,
        });
    }
    handleSubmit(event){
        
    }

    render()
    {
        const { district, ward, service, price } = this.state;
        return(
        <div className="fs-find">
            <h3>Tìm</h3>
            <form>
                <label for="district">Quận: </label>
                <select value={district} onChange={this.handleChangeDistrict} class="custom-select">
                    {
                        
                        districtData.map((district, index) => ( <option value={index}>{district}</option>))
                    }
                </select>

                <label for="district">Phường: </label>
                <select value={ward} onChange={this.handleChangeWard} class="custom-select">
                    {
                        wardData[district].map((ward, index) => ( <option value={index}>{ward}</option>))
                    }
                </select>

                <label for="district">Dịch vụ: </label>
                <select value={service} onChange={this.handleChangeService} class="custom-select">
                    {
                        serviceType.map((srv, index) => ( <option value={index}>{srv}</option>))
                    }
                </select>

                <label for="district">Mức giá: </label>
                <select name="cars" class="custom-select">
                    <option selected>Custom Select Menu</option>
                    <option value="volvo">Volvo</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>

                <label for="district">Diện tích: </label>
                <select name="cars" class="custom-select">
                    <option selected>Custom Select Menu</option>
                    <option value="volvo">Volvo</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <button type="submit" onClick={this.handleSubmit}>Tìm</button>
            </form>
        </div>

    )
}
}
