import React, { Component } from 'react';
import './login_layout.css';


class Login extends Component{
    render(){
        return(
            <div>
            <form>
                <label>Email</label><input /><label>Password</label><input /><button>Login</button>
            </form>
            <form id="signUp-form">
                <label id="signUp-label">name</label>
                <input id="signUp-input"/><label id="signUp-label">email</label><input id="signUp-input"/>
                <label id="signUp-label">password</label><input id="signUp-input"/>
                <button id="signUp-button">signUp</button>
            </form>
            </div>
        );
    }
}
export default Login;