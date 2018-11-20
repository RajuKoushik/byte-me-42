import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';
import Posts from "./posts";
import Followers from "./followers";
import Followings from "./following";
import UserName from './user_name';
import PostCount from './post_count';

class User_profile extends Component{
    render(){
        return(
            <body>

                <UserName/>
            <Followers/>
            <Followings/>
                <PostCount/>

            <Posts/>
            </body>
        );
    }
}


export default User_profile;