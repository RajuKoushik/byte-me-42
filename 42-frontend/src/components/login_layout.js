import React, { Component } from 'react';
import './login_layout.css';
import back from './images/coffee.jpg';

const backStyle={
    backgroundImage: 'url(' + back + ')',
    backgroundRepeat: null,
    backgroundSize: '100%',
};

const formStyle={
    marginLeft: '400px',
};

class LoginLayout extends Component{
    render(){
        return(
            <div className={"form1"} style={backStyle}>
                <h1>Login/Register</h1>

                <form style={formStyle}>
                    <label>Email:</label><input />
                    <label>Password:</label><input />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}






export default LoginLayout;