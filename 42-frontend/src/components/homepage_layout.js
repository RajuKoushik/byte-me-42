import React, {Component} from 'react';
import './homepage.css';
import Logo42 from './images/42logo.png';


const divStyle = {
    backgroundColor : '#C0C0C0'
}



class HomepageLayout extends Component{
    render(){
        return(
            <body>
            <div>
                <img className='logo' src = {Logo42} />
                <h></h>
            </div>
            </body>
        );
    }
}

export default HomepageLayout;