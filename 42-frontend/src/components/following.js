import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';


class Followings extends Component{

    constructor(props){
        super(props);
        this.state = {
            user_following_count : []
        }
    }


    async componentDidMount() {
        fetch('http://ec2-18-220-22-245.us-east-2.compute.amazonaws.com:8080/blog/user/test')
            .then(result => {
                return result.json();

            }).then(data => {
            let followings_count = data.following.length;
            this.setState({user_following_count: followings_count});
        })

    }
    render(){
        return (
            <div>
                <label id="following">Following</label>
                <div>
                    <label id="following_no">{this.state.user_following_count}</label>
                </div>
            </div>
        );
    }
}



export default Followings;