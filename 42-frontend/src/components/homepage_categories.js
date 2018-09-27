import React, {Component} from 'react';
import fashion from './images/fashion.svg';
import food from './images/food.ico';
import shopping from './images/shopping.png';
import technology from './images/techology.jpg';
import travel from './images/travel.png';


const categoryStyle = {
    paddingTop: '40px',
    fontFamily: '"Lucida Console", Monaco, monospace',
    marginLeft: '280px',
    fontSize: '30px',
    color: '#900C3F',
    fontStyle: 'bold'
};

const imageStyle = {
    marginLeft: '110px'
}

class Categories extends Component{
    render(){
        return (
            <div style={categoryStyle}>
                <img src={fashion} height={40} width={40} style={imageStyle}/>
                <img src={food} height={40} width={40} style={imageStyle}/>
                <img src={shopping} height={40} width={40} style={imageStyle}/>
                <img src={technology} height={40} width={40} style={imageStyle}/>
                <img src={travel} height={40} width={40} style={imageStyle}/>

            </div>
        );
    }
}

export default Categories;