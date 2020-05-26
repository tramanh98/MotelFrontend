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
                <Descriptions.Item label="Diện tích">35 m2</Descriptions.Item>
                <Descriptions.Item label="Giá cho thuê">1.000.000 VND/tháng</Descriptions.Item>
                <Descriptions.Item label="Loại phòng">Căn hộ</Descriptions.Item>
                <Descriptions.Item label="Chủ sở hữu">Nguyễn Văn A</Descriptions.Item>
                <Descriptions.Item label="Liên lạc">01245678952</Descriptions.Item>
                <Descriptions.Item label="Địa chỉ" span={2}>321/456 đường Hoàng hoa Thám, P.BTĐ, Q.BT</Descriptions.Item>

            </Descriptions>
        </div>
    )
}