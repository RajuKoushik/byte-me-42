import React, { Component } from 'react';
import './App.css';
import User_profile from './components/user_profile';
import './components/user_profile.css';
import Header from './components/homepage_header';
import HomepageLayout from './components/homepage_layout';
import SearchBar from './components/homepage_search';
import Categories from './components/homepage_categories';
import Companies from './components/homepage_companies';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectCase: 'home'
        };

        this.selectName = this.
    }


    render(){
        return(
            <div>
                <Header/>
                <HomepageLayout/>
                <SearchBar/>
                <Categories/>
                <Companies/>
            </div>
        );
    }
}

export default App;
