import React, {Component} from 'react';

const inputStyle = {
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '-8%',
    alignItems: 'center',
    width: '400px',
    height: '46px',
    marginLeft: '34%',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '140%',
    background: '#EDECEC',
    boxShadow: '6px 6px 3px #D5D5D5'
};


class SearchBar extends Component {
    render(){
        return (
            <input type="text" placeholder="Search" style = {inputStyle}>
            </input>
        );
    }
}

export default SearchBar;