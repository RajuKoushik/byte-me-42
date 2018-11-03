import React, {Component} from 'react';
import logo from './images/42logo.png';
import profile from './images/profile.png';

const inputStyle = {
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '1%',
    width: '400px',
    height: '46px',
    marginLeft: '30%',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '140%',
    background: '#EDECEC',
    boxShadow: '6px 6px 3px #D5D5D5'
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

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};
class Header extends Component {
    render(){
        return (
            <div style={{backgroundColor: bgColors.Blue}}>
                <img  src={logo} style={logoStyle}/>
                <input style={inputStyle}></input>
            </div>
        );
    }
}

export default Header;