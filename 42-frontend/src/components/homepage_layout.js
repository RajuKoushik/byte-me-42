import React, {Component} from 'react';
import './homepage.css';
import Logo42 from './images/42logo.png';
import './homepage_layout.css';

const divStyle = {
    backgroundColor : '#C0C0C0'
}
const link = {
    position: 'absolute',
    color : 'rgb(71, 71, 71)',
    fontWeight : 'lighter' ,
    fontSize : '24px',
    fontFamily: '"Marvel", cursive, sans-serif',
    marginLeft: '88%',
    marginTop : '-7%'
}



class HomepageLayout extends Component{
    render(){
        return(
            <body>
            <div>
                <a href="#" onClick={this.props.onSelect} style={link}>SAMPLE NAME</a>
            </div>
            </body>
        );
    }
}

export default HomepageLayout;
