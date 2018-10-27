import React, { Component } from 'react';
import './App.css';
import User_profile from './components/user_profile';
import './components/user_profile.css';
import Header from './components/homepage_header';
import HomepageLayout from './components/homepage_layout';
import SearchBar from './components/homepage_search';


class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <HomepageLayout/>
                <SearchBar/>
                <User_profile/>

            </div>
        );
    }
}

export default App;
