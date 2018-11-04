import React, {Component} from 'react';
import './homepage.css';
import Logo42 from './images/42logo.png';
import './homepage_layout.css';

const divStyle = {
    backgroundColor : '#C0C0C0'
}
const link = {
    color : 'rgb(71, 71, 71)',
    fontWeight : 'lighter' ,
    fontSize : '24px',
    fontFamily: '"Marvel", cursive, sans-serif',
    fontcolor: '#222222',
    marginLeft: '83%',
    marginTop : '40%'
}



class HomepageLayout extends Component{
    render(){
        return(
            <body>
            <div>
                <img className='logo' src = {Logo42} />
                <h></h>
                <a href="#" style={link}>SAMPLE NAME</a>
            </div>
            </body>
        );
    }
}

export default HomepageLayout;