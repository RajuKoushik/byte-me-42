import React, {Component} from 'react';

const inputStyle = {
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '-5%',
    alignItems: 'center',
    width: '400px',
    height: '46px',
    marginLeft: '38%',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '140%',
    background: '#EDECEC',
    boxShadow: '6px 6px 3px #D5D5D5'
};


class SearchBar extends Component {
    render(){
        return (
            <body>
                <input style={inputStyle}>
                </input>
            </body>
        );
    }
}

export default SearchBar;