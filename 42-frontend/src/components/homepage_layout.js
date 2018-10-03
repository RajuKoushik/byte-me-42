import React, {Component} from 'react';
import './homepage.css';
import Logo42 from './images/42logo.png';


class HomepageLayout extends Component{
    render(){
        return(
            <body>
            <img className='logo' src = {Logo42} />
            </body>
        );
    }
}

export default HomepageLayout;