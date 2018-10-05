import React, {Component} from 'react';
import fashion from './images/fashion.svg';
import food from './images/food.ico';
import shopping06 from './images/shopping06.png';
import tech from './images/tech.png';
import travel from './images/travel.png';


const categoryStyle = {
    paddingTop: '40px',
    fontFamily: '"Lucida Console", Monaco, monospace',
    //alignItems: 'center'
    marginTop: '-6%',
    marginLeft: '20%',
    fontSize: '30px',
    color: '#900C3F',
    fontStyle: 'bold'
};

const imageStyle = {
    marginLeft: '110px',
    height: '40px',
    width: '40px'
}

class Categories extends Component{
    render(){
        return (
            <div style={categoryStyle}>
                <img src={fashion} height={40} width={40} style={imageStyle}/>
                <img src={food} height={40} width={40} style={imageStyle}/>
                <img src={shopping06} height={60} width={60} style={imageStyle}/>
                <img src={tech} height={40} width={40} style={imageStyle}/>
                <img src={travel} height={40} width={40} style={imageStyle}/>

            </div>
        );
    }
}

export default Categories;