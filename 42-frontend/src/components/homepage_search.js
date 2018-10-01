import React, {Component} from 'react';

const inputStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '50px',
    marginLeft: '500px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '140%',
    background: '#F4EEEE',
    borderStyle: 'inset'
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