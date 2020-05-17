import { Checkbox, Card, Row  } from 'antd'
import React from "react";
import { Component } from "react";
import '../style.css'


const gridStyle = {
    width: '100%',
  };

  const filterCheckbox = [
      {
          title: 'Đánh giá',
          option: [{
                value: 'great',
                label: 'Tuyệt vời'},
            {   
                value: 'good',
                label: 'Tốt'},
            {   
                value: 'normal',
                label: 'Bình thường'},

        ]
      },
      {
        title: 'Tiện nghi',
        option: [{
              value: 'park',
              label: 'Đỗ xe miễn phí'},
        {   
            value: 'wifi',
            label: 'Wifi miễn phí'},
        {   
            value: 'pet',
            label: 'Cho phép nuôi vật nuôi'},
        {   
            value: 'camera',
            label: 'Camera an ninh'},
        {   
            value: 'bus',
            label: 'Gần trạm xe bus'},
        {   
            value: 'elevator',
            label: 'Thang máy'},

      ]
    },
    {
        title: 'Tiện nghi phòng',
        option: [{
              value: 'wash',
              label: 'Máy giặt'},
        {   
            value: 'rgis',
            label: 'Tủ lạnh'},
        {
            value: 'mlanh',
            label: 'Máy lạnh'},
        {   
            value: 'tqa',
            label: 'Tủ quần áo'},
        {   
            value: 'bed',
            label: 'Giường'},
        {   
            value: 'bedroom2',
            label: 'Có trên 2 phòng ngủ'},
        {   
            value: 'yard',
            label: 'Sân hiên'},

      ]
    },
    {
        title: 'Loại phòng',
        option: [{
              value: 'family',
              label: 'Phòng gia đình'},
          {   
              value: 'dabperson',
              label: 'Phòng cho người khuyết tật'},
          {   
              value: 'single',
              label: 'Phòng đơn'},
        {   
            value: 'student',
            label: 'Phòng cho sinh viên'},
        {   
            value: 'officer',
            label: 'Phòng cho người làm việc tại nhà'},

      ]
    },
    {
        title: 'Vị trí',
        option: [{
              value: 'hpt',
              label: 'Gần bệnh viện'},
          {   
              value: 'phyedu',
              label: 'Gần trung tâm thể thao'},

      ]
    }
  ]
export default class Filter  extends Component {

    
    render(){
        
        function onChange(checkedValues) {
            console.log('checked = ', checkedValues);
        }
        return(
            <Checkbox.Group style={{ width: '100%', margin: '20px 0' }} onChange={onChange}>
                <Card className="slCard" title="Chọn lọc theo">
                    {filterCheckbox.map((item) => 
                        <Card.Grid  style={gridStyle}>
                            <p>{item.title}</p>
                            <div className="d-flex flex-column">
                                {item.option.map((cbox) =>
                                    <div className="p-2" >
                                        <Checkbox className="checkbox" value={cbox.value}>{cbox.label}</Checkbox>
                                    </div>
                                )}
                            </div>
                        </Card.Grid>
                    )}
                </Card>
            </Checkbox.Group>

        );
    
}
}