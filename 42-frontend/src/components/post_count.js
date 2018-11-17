import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';

const posts ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '41%',
    marginTop: '7%'
}

const posts_no ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '42%',
    marginTop: '9.5%'
}

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
                <label style={posts}>Posts</label>
                <div>
                    <label style={posts_no}>{this.state.posts_count}</label>
                </div>
            </div>
        );
    }
}



export default PostCount;