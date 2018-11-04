import React, {Component} from 'react';
import './homepage_newpost.css';

class NewPost extends Component{
    render(){
        return(
            <div>
                <input id="title" type="text" placeholder="Title"/>
                <input id="content" type="text" placeholder="Content"/>
                <button id="post_button">Post</button>
            </div>

        )
    }
}

export default NewPost;