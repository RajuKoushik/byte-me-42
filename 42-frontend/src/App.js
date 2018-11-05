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
import Posts from './components/posts';
import Branches from "./components/branches";
import NewPost from './components/homepage_newpost'
import LoginLayout from './components/login_layout'

import User_profile from './components/user_profile';
import './components/user_profile.css';



class App extends Component {

    constructor(props){
        super(props);

        this.state = {
         selectCase: 'home'
        };  

        this.selectName = this.selectName.bind(this);
    }

    selectName(){
      this.setState({selectCase:'name'});
    }
    render(){
      switch(this.state.selectCase){
        case 'home' :
            return(
                <div >
                    <Header />
                    <Categories />
                    <HomepageLayout onSelect={this.selectName}/>
                    <Companies />
                    <Posts/>
                    <NewPost />
                </div>
                );
        case 'name' :
        return(
            <div>
                <Header/>
                <User_profile/>
            </div>
        );
        default:
        return null;
      }
    }
    
}

export default App;
