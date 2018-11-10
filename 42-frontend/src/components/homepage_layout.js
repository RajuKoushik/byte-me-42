import React, {Component} from 'react';
import './homepage.css';
import './homepage_layout.css';

const link = {
    position: 'absolute',
    color : 'rgb(71, 71, 71)',
    fontWeight : 'lighter' ,
    fontSize : '24px',
    fontFamily: '"Marvel", cursive, sans-serif',
    textTransform: 'uppercase',
    marginLeft: '88%',
    marginTop : '-7%'
}

class HomepageLayout extends Component{

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
            <body>
            <div>
                <a href="#" onClick={this.props.onSelect} style={link}>{this.state.user_name}</a>
            </div>
            </body>
        );
    }
}



export default HomepageLayout;
