import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';
import Posts from "./posts";
import Followers from "./followers";
import Followings from "./following";

class User_profile extends Component{
    render(){
        return(
            <body>
            <form>
            <label id="name">Sample Name</label>
            <Followers/>
            <Followings/>
            <label id="posts">Posts</label>
                <label id="posts_no">0</label>
            </form>
            <Posts/>
            </body>
        );
    }
}


export default User_profile;