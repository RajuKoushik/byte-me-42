import React, { Component } from 'react';
import SignUp from './components/signUp';
import LoginLayout from './components/login_layout'
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

import User_profile from './components/user_profile';
import './components/user_profile.css';


import 'antd/dist/antd.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import CustomLayout from './containers/Layout';
import * as actions from './store/actions/auth';
class App extends Component {

    constructor(props){
        super(props);

        this.state = {
         selectCase: 'login'
        };  

        this.selectPost = this.selectPost.bind(this);
    }

    selectPost(){
        this.setState({selectCase:'post'});
    }

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render(){
      switch(this.state.selectCase){
        case 'login' :
            return(
                <Router>
                  <CustomLayout {...this.props}>
                      <BaseRouter />
                  </CustomLayout>
                </Router>
                );
        case 'home' :
            return(
                <div >
                   <Header />
                   <Categories />
                   <Companies />
                   <Posts onPostSelect={this.selectPost} />
                </div>
                );
        case 'post' :
        return(

            <div>
              <Branches />
              <SignUp />
              <LoginLayout />
              <Login/>
              <Logo/>
              <HomepageLayout />
              <SearchBar />
              <Categories />
              <Companies />
              <Header />
              <Posts />
              <User_profile/>
            </div>
        );
        default:
        return null;
      }
    }
    
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
