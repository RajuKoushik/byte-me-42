import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';

const followers ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '10%',
    marginTop: '7%'
}

const followers_no ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '12%',
    marginTop: '9.5%'
}


class Followers extends Component{

    constructor(props){
        super(props);
        this.state = {
            user_follower_count : []
        }
    }


    async componentDidMount() {
        fetch('http://127.0.0.1:8000')
            .then(result => {
            console.log("akash")
            return {"followers": [{"followers_count":"56"}]}

        }).then(data => {
            let followers_count = data.followers.map(follower => {
                return (
                    <div>
                        <label style={followers_no}>{follower.followers_count}</label>
                    </div>
                )


            })

            this.setState({user_follower_count: followers_count});
        })

    }
    render(){
        return (
            <div>
                <label style={followers}>Followers</label>
                {this.state.user_follower_count}
            </div>
        );
    }
}



export default Followers;