import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';


class Followers extends Component{

    constructor(props){
        super(props);
        this.state = {
            user_follower_count : []
        }
    }


    async componentDidMount() {
        fetch('http://ec2-18-220-22-245.us-east-2.compute.amazonaws.com:8080/blog/user/test')
            .then(result => {
            return result.json();

        }).then(data => {
            let followers_count = data.followers.length;
            this.setState({user_follower_count: followers_count});
        })

    }
    render(){
        return (
            <div>
                <label id="followers">Followers</label>
                <div>
                    <label id="followers_no">{this.state.user_follower_count}</label>
                </div>
            </div>
        );
    }
}



export default Followers;