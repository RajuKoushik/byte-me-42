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
    fontFamily: '"Lucida Console", Monaco, monospace',
    marginTop: '0.7%',
    fontSize: '30px',
    color: '#F0F0F0',
    fontStyle: 'bold'

};

const inputStyle = {
    paddingTop: '40px',
    fontFamily: '"Lucida Console", Monaco, monospace',
    //alignItems: 'center'
    marginTop: '20%',
    marginLeft: '10%',
    fontSize: '30px',
    color: '#900C3F',
    fontStyle: 'bold'

}
const imageStyle = {
    marginLeft: '10%',
    height: '2.2%',
    width: '2.2%',
    alignItems : 'center'

}

const imageStyle1 = {
    marginLeft: '24%',
    height: '2.2%',
    width: '2.2%',
    alignItems : 'center'

}



class Categories extends Component{
    render(){
        return (
            <div style={categoryStyle}>
                <img  className="inline" src={fashion} height={40} width={40} style={imageStyle1}/>
                <img  className="inline" src={food} height={40} width={40} style={imageStyle}/>
                <img  className="inline" src={shopping06} height={60} width={60} style={imageStyle}/>
                <img  className="inline" src={tech} height={40} width={40} style={imageStyle}/>
                <img  className="inline" src={travel} height={40} width={40} style={imageStyle}/>
            </div>
        );
    }
}

export default Categories;