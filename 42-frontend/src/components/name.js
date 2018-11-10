import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';

class Name extends Component{

    constructor(props){
        super(props);
        this.state = {
            user_name : []
        }
    }


    async componentDidMount() {
        fetch('http://ec2-18-220-22-245.us-east-2.compute.amazonaws.com:8080/blog/user/test')
            .then(result => {
                return result.json();

            }).then(data => {
            let users_name = data.user;
            this.setState({user_name: users_name});
        })

    }
    render(){
        return (
            <div>
                <label id="name">{this.state.user_name}</label>

            </div>
        );
    }
}



export default Name;