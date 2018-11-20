import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import { connect } from "react-redux";
import CustomForm from '../components/Form';
import Followers from './followers';
import { List } from 'antd';
import { Row, Col } from 'antd';

const UserFollowers = (props) => {

    return (

        <Row dataSource={props.data}>

            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>{props.data.length}</Col>


        </Row>

    )

}


export default UserFollowers;