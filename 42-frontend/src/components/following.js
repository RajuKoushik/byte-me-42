import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_profile.css';

const following ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    align: 'center',
    marginLeft: '25%',
    marginTop: '7%'
}

const following_no ={
    position: 'absolute',
    font: '40% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    marginLeft: '27%',
    marginTop: '9.5%'
}


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
                        <label style={following_no}>{following.following_count}</label>
                    </div>
                )


            })

            this.setState({user_following_count: following_count});
        })

    }
    render(){
        return (
            <div>
                <label style={following}>Following</label>
                {this.state.user_following_count}
            </div>
        );
    }
}



export default Followings;