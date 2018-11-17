import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';

const name_style = {
    position: 'absolute',
    font: '190% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    align: 'center',
    marginTop: '0',
    marginLeft: '-17%'
}

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
                <label style={name_style}>{this.state.user_name}</label>

            </div>
        );
    }
}



export default Name;