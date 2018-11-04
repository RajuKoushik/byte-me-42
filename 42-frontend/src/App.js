import React, { Component } from 'react';
import SignUp from './components/signUp';
import './App.css';
import './components/signUp.css';
import Login from './components/login.js';

import HomepageLayout from './components/homepage_layout';
import SearchBar from './components/homepage_search';
import Categories from './components/homepage_categories';
import Companies from './components/homepage_companies';

import Logo from './components/logo';

import Header from './components/homepage_header';


class App extends Component {
    render(){
        return(
            <div>

                <SignUp />

                <LoginLayout />

                <Login/>
                <Logo/>


                <HomepageLayout />
                <SearchBar />
                <Categories />
                <Companies />
                <Header />


            </div>
        );
    }
}

export default App;
