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
        fetch('https://www.google.com/')
            .then(result => {
                console.log("akash")
                return {"followings": [{"following_count":"56"}]}

            }).then(data => {
            let following_count = data.followings.map(following => {
                return (
                    <div>
                        <label id="following_no">{following.following_count}</label>
                    </div>
                )


            })

            this.setState({user_following_count: following_count});
        })

    }
    render(){
        return (
            <div>
                <label id="following">Following</label>
                {this.state.user_following_count}
            </div>
        );
    }
}



export default Followings;