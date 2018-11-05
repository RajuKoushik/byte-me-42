import React, {Component} from 'react';
import logo from './images/42logo.png';
import profile from './images/profile.png';
import './homepage_header.css'


const inputStyle = {
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '1%',
    width: '400px',
    height: '46px',
    marginLeft: '30%',
    fontFamily: 'Marvel, sans-serif',
    fontSize: '40%',
    background : 'transparent',
    boxShadow: '6px 6px 3px #D5D5D5',
    border : '2px solid ',
    borderColor : '#383838',
    borderWidth : 'thin'
};

const logoStyle = {
    height: '80px',
    width: '80px',
    marginTop: '0.1%',
    marginLeft: '2%'

};

const profileStyle = {
    height: '80px',
    width: '80px',
    marginLeft: '95%'
};


class Header extends Component {
    render(){
        return (
            <div>
                <img src={logo} style={logoStyle}/>
                <input style={inputStyle}></input>
            </div>
        );
    }
}

export default Header;