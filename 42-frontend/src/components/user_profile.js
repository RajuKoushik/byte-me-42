import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';
import Posts from "./posts";


class User_profile extends Component{
    render(){
        return(
            <body>
            <form>
            <label id="name">First Last</label>
            <label id="followers">Followers</label>
                <label id="followers_no">0</label>
            <label id="following">Following</label>
                <label id="following_no">0</label>
            <label id="posts">Posts</label>
                <label id="posts_no">0</label>
            </form>
            <Posts/>
            </body>
        );
    }
}


export default User_profile;