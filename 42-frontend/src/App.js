import React, { Component } from 'react';
import LoginLayout from './components/login_layout';
import './App.css';
import './components/login_layout.css';
import HomepageLayout from './components/homepage_layout';
import SearchBar from './components/homepage_search';
import Categories from './components/homepage_categories';
import Companies from './components/homepage_companies';
import Header from './components/homepage_header';
import Posts from './components/posts';



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
                </div>
                );
        case 'post' :
        return(
                <div >
                   <Header />
                   <Categories />
                   <Companies />
                </div>
                );
        default:
        return null;
      }
    }
    
}

export default App;
