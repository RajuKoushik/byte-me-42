import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';
import Posts from "./posts";
import Followers from "./followers";
import Followings from "./following";
import './homepage.css';

const newPost = {
    position : 'absolute',
    marginTop : '45%',
    marginLeft : '16%',
    width : '85%',
    height : '70%'
}

class User_profile extends Component{
    render(){
        return(
            <body>
            <form>
            <label id="name">Sample Name</label>
            <Followers/>
            <Followings/>
            <label id="posts">Posts</label>
                <label id="posts_no">1</label>
            </form>
                <div style={newPost}>
                    <Posts/>
                </div>

            </body>
        );
    }
}


export default User_profile;