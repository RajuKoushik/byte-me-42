import React, {Component} from 'react';
import './user_profile.css';

class User_profile extends Component{
    render(){
        return(
            <body>
            <form>
            <label id="name">Sample 42</label>
            <label id="followers">Followers</label>
                <label id="followers_no">42</label>
            <label id="following">Following</label>
                <label id="following_no">42</label>
            <label id="posts">Posts</label>
                <label id="posts_no">42</label>
            </form>
            </body>
        );
    }
}


export default User_profile;