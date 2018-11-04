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
        fetch('https://www.google.com/')
            .then(result => {
            console.log("akash")
            return {"followers": [{"followers_count":"56"}]}

        }).then(data => {
            let followers_count = data.followers.map(follower => {
                return (
                    <div>
                        <label id="followers_no">{follower.followers_count}</label>
                    </div>
                )


            })

            this.setState({user_follower_count: followers_count});
        })

    }
    render(){
        return (
            <div>
                <label id="followers">Followers</label>
                {this.state.user_follower_count}
            </div>
        );
    }
}



export default Followers;