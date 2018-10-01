import React, {Component} from 'react';
import food1 from "./images/food1.png";
import food2 from "./images/food2.png";
import shopping1 from "./images/shopping.png";
import shopping2 from "./images/shopping2.jpg";
import shopping3 from "./images/shopping3.svg";
import tech1 from "./images/tech1.png";
import tech2 from "./images/tech2.png";
import travel1 from "./images/travel1.png";

const companyStyle1 = {
    position: 'absolute',
    top: '150px',
    right: '50px'
};

const companyStyle2 = {
    position: 'absolute',
    top: '200px',
    right: '180px'
};

const companyStyle3 = {
    position: 'absolute',
    top: '250px',
    right: '70px'
};
const companyStyle4 = {
    position: 'absolute',
    top: '300px',
    right: '150px'
};
const companyStyle5 = {
    position: 'absolute',
    top: '350px',
    right: '40px'
};
const companyStyle6 = {
    position: 'absolute',
    top: '380px',
    right: '190px'
};
const companyStyle7 = {
    position: 'absolute',
    top: '450px',
    right: '50px'
};
const companyStyle8= {
    position: 'absolute',
    top: '530px',
    right: '150px'
};

class Companies extends Component {
    render(){
        return(
            <div>
                <img src={food1} height={40} width={40} style={companyStyle1}/>
                <br />
                <img src={food2} height={40} width={40} style={companyStyle2}/>
                <br />
                <img src={shopping1} height={40} width={40} style={companyStyle3}/>

                <br />
                <img src={shopping3} height={40} width={40} style={companyStyle5}/>
                <br />
                <img src={tech1} height={40} width={40} style={companyStyle6}/>
                <br />
                <img src={tech2} height={40} width={40} style={companyStyle7}/>
                <br />
                <img src={travel1} height={40} width={40} style={companyStyle8}/>
            </div>
        );
    }
}

export default Companies;