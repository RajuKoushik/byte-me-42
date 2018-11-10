import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';
import Posts from "./posts";
import Followers from "./followers";
import Followings from "./following";
import './homepage.css';
import Name from "./name";
import PostCount from "./user_post";

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
            <Name/>
            <Followers/>
            <Followings/>
            <PostCount/>
            </form>
                <div style={newPost}>
                    <Posts/>
                </div>

            </body>
        );
    }
}


export default User_profile;