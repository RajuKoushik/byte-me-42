import React, { Component } from 'react';
import SignUp from './components/signUp';
import './App.css';
import './components/signUp.css';
import HomepageLayout from './components/homepage_layout';
import SearchBar from './components/homepage_search';
import Categories from './components/homepage_categories';
import Companies from './components/homepage_companies';

class App extends Component {
    render(){
        return(
            <div>
                <SignUp />
            </div>
        );
    }
}

export default App;
