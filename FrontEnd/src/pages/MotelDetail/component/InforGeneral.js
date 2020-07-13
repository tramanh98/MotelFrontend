import { Descriptions, Badge } from 'antd';
import React from "react";
export default function GeneralInfor(props) {

    return(
        <div>
            <Descriptions
                bordered
                column={{ xxl: 4, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
            >
                <Descriptions.Item label="Đối tượng">Tất cả</Descriptions.Item>
                <Descriptions.Item label="Diện tích">{props.arc} m2</Descriptions.Item>
                <Descriptions.Item label="Giá cho thuê">{props.prc} VND/tháng</Descriptions.Item>
                <Descriptions.Item label="Loại phòng">{props.type}</Descriptions.Item>
                <Descriptions.Item label="Chủ sở hữu">{props.first_name} {props.last_name}</Descriptions.Item>
                <Descriptions.Item label="Liên lạc">{props.phone_number}</Descriptions.Item>
                <Descriptions.Item label="Địa chỉ" span={2}>{props.address}, {props.local.ward}, {props.local.dst}, HCM</Descriptions.Item>

            </Descriptions>
        </div>
    )
}