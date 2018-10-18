import React, { Component } from 'react';
import './App.css';
import User_profile from './components/user_profile';
import './components/user_profile.css';


class App extends Component {
    render(){
        return(
            <div>

                <User_profile/>
            </div>
        );
    }
}

export default App;
