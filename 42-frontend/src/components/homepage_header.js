import React, {Component} from 'react';

const hstyle = {
    position: 'absolute',
    marginTop: '-25%',
    marginLeft : ' 85%',
    color : '#F9F9F9',
    fontFamily : '"Avant Garde", Avantgarde, sans-serif',
    fontSize : '20px'
}



class Header extends Component {
    render(){
        return (
            <body>
                <h style={hstyle}></h>
            </body>
        );
    }
}

export default Header;