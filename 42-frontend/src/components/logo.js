import React, { Component } from 'react';
import logo from './images/logo42.png';

const logoStyle={
    height: '130px',
    width: '140px',
    marginTop: '1%',
    marginLeft: '1%'
};

class Logo extends Component{
    render(){
        return(
          <body>
            <img src={logo} style={logoStyle}/>
          </body>
        );
    }
}

export default Logo;