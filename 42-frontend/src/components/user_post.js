import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';


class PostCount extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts_count : []
        }
    }


    async componentDidMount() {
        fetch('http://ec2-18-220-22-245.us-east-2.compute.amazonaws.com:8080/blog/user/test')
            .then(result => {
                return result.json();

            }).then(data => {
            let post_count = data.post.length;
            this.setState({posts_count: post_count});
        })

    }
    render(){
        return (
            <div>
                <label id="posts">Posts</label>
                <div>
                    <label id="posts_no">{this.state.posts_count}</label>
                </div>
            </div>
        );
    }
}



export default PostCount;