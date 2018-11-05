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

        this.selectPost = this.selectPost.bind(this);
    }

    selectPost(){
      this.setState({selectCase:'post'});
    }
    render(){
      switch(this.state.selectCase){
        case 'home' :
            return(
                <div >
                   <Header />
                   <Categories />
                   <Companies />
                   <Posts onPostSelect={this.selectPost} />
                    <NewPost />
                </div>
                );
        case 'post' :
        return(
            <div>
              <Branches onBranchSelect={this.selectBranch}/>
            </div>
        );
        default:
        return null;
      }
    }
    
}

export default App;
