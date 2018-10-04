import React, { Component } from 'react';
import './login_layout.css';



class Login extends Component{
    render(){
        return(
            <div  className={"blurBack"}>
            <form>
                <label>Email</label><input /><label>Password</label><input /><button>Login</button>
            </form>
            </div>
        );
    }
}
export default Login;