import React, {Component} from 'react';

const hstyle = {
    position: 'absolute',
    marginTop: '-25%',
    marginLeft : ' 85%',
    color : '#F0F0F0',
    fontFamily : '"Avant Garde", Avantgarde, sans-serif',
    fontSize : '20px'
}



class Header extends Component {
    render(){
        return (
            <body>
                <h style={hstyle}/>
            </body>
        );
    }
}

export default Header;