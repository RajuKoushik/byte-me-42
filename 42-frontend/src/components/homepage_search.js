import React, {Component} from 'react';

const inputStyle = {
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '-9%',
    alignItems: 'center',
    width: '400px',
    height: '46px',
    marginLeft: '34%',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '140%',
    background: '#F9F9F9',
    boxShadow: '6px 6px 3px #D5D5D5'
};

class SearchBar extends Component {
    render(){
        return (
            <input style={inputStyle}>
            </input>
        );
    }
}

export default SearchBar;