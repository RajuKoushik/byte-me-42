import React from 'react';

import { Row, Col } from 'antd';

const Followings = (props) => {

    return (

        <Row dataSource={props.data}>

            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{props.data.length}</Col>

        </Row>

    )

}


export default Followings;