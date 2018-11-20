import React from 'react';

import { Row, Col } from 'antd';

const User_name = (props) => {

    return (

        <Row dataSource={props.data}>

            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{props.data}</Col>

        </Row>

    )

}


export default User_name;