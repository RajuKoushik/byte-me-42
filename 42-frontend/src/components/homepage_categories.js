import React, {Component} from 'react';
import fashion from './images/fashion.svg';
import food from './images/food.ico';
import shopping06 from './images/shopping06.png';
import tech from './images/tech.png';
import travel from './images/travel.png';

var bgColors = { "White": "#FFFFFF",
                    "Blue": "#00B1E1"
};

const categoryStyle = {
    paddingTop: '40px',
    fontFamily: '"Lucida Console", Monaco, monospace',
    marginTop: '2%',
    fontSize: '30px',
    color: '#F0F0F0',
    fontStyle: 'bold'
};

const inputStyle = {
    paddingTop: '40px',
    fontFamily: '"Lucida Console", Monaco, monospace',
    //alignItems: 'center'
    marginTop: '20%',
    marginLeft: '20%',
    fontSize: '30px',
    color: '#900C3F',
    fontStyle: 'bold'
}
const imageStyle = {
    marginLeft: '200px',
    height: '40px',
    width: '40px'
}



class Categories extends Component{
    render(){
        return (
            <div style={categoryStyle}>
                <img  className="inline" src={fashion} height={40} width={40} style={imageStyle}/>
                <img  className="inline" src={food} height={40} width={40} style={imageStyle}/>
                <img  className="inline" src={shopping06} height={60} width={60} style={imageStyle}/>
                <img  className="inline" src={tech} height={40} width={40} style={imageStyle}/>
                <img  className="inline" src={travel} height={40} width={40} style={imageStyle}/>
            </div>
        );
    }
}

export default Categories;