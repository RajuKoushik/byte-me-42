import React, { Component } from 'react';
import LoginLayout from './components/login_layout';
import './App.css';
import './components/login_layout.css';
import Login from './components/login.js';
import HomepageLayout from './components/homepage_layout';
import SearchBar from './components/homepage_search';
import Categories from './components/homepage_categories';
import Companies from './components/homepage_companies';
import Logo from './components/logo';

class App extends Component {
    render(){
        return(
            <div>
                <LoginLayout />
                <Login/>
                <Logo/>

            </div>
        );
    }
}

export default App;
