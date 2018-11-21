import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'antd';
import { connect } from "react-redux";
import CustomForm from '../components/Form';
import Articles from '../components/Article';
import { List } from 'antd';
import Followings from "../components/Followings";
import Followers from "../components/User_followers";
import { Row, Col } from 'antd';
import User_name from "../components/user_name";
import PostCount from '../components/post_count';

const name_style ={
    position: 'absolute',
    textTransform: 'uppercase',
    font: '150% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    align: 'center',
    marginLeft: '45%',
    marginTop: '2%'
}

const followers_style ={
    position: 'absolute',
    font: '120% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '28%',
    marginTop: '7%'
}

const followers_no_style ={
    position: 'absolute',
    font: '120% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '28%',
    marginTop: '9.5%'
}

const following_style ={
    position: 'absolute',
    font: '120% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    align: 'center',
    marginLeft: '45.5%',
    marginTop: '7%'
}

const following_no_style ={
    position: 'absolute',
    font: '120% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '47%',
    marginTop: '9.5%'
}
const post_count_style ={
    position: 'absolute',
    font: '120% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    align: 'center',
    marginLeft: '65%',
    marginTop: '7%'
}

const post_count_no_style ={
    position: 'absolute',
    font: '120% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '65%',
    marginTop: '9.5%'
}

const article_style = {
    marginTop: '20%'
}


class ProfileView extends React.Component {

    state = {
        following: [],
        followers: [],
        user: [],
        post: []

    }

    componentDidMount() {
        const userName = localStorage.getItem('userName');

        axios.get(`https://byte-me-backend.herokuapp.com/blog/user/${userName}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    following: res.data.following,
                    followers: res.data.followers,
                    user: res.data.user,
                    post:res.data.post

                });
                console.log(userName)
            })
    }


    render() {
        return (

            <Row justify="center">
                <div style={name_style}><User_name data={this.state.user}/></div>
                <div style={followers_style}>Followers</div>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={followers_no_style}><Followings data={this.state.following} /></Col>
                <div style={following_style}>Followings</div>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={following_no_style}><Followers data={this.state.followers}/></Col>
                <div style={post_count_style}>Posts</div>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={post_count_no_style}><PostCount data={this.state.post}/></Col>
                <div style={article_style}><Articles data={this.state.post}/></div>
            </Row>

        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default ProfileView;