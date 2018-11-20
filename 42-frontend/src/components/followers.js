import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';
import {List} from "antd/lib/list";
import {Button} from "antd";

const followers ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '10%',
    marginTop: '7%'
}

const followers_no ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '12%',
    marginTop: '9.5%'
}


const Followers = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    key={item.followers.length}
                >
                    <List.Item.Meta/>

                </List.Item>
            )}
        />
    )

       }





export default Followers;