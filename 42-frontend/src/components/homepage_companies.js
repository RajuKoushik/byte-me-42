import React, {Component} from 'react';
import tacoBell from "./images/tacoBell.svg";
import chipotle from "./images/chipotle.png";
import shopping2 from "./images/shopping2.jpg";
import shopping3 from "./images/shopping3.svg";
import tech1 from "./images/tech1.png";
import tech2 from "./images/tech2.png";
import travel1 from "./images/travel1.png";

const companyStyle1 = {
    position: 'absolute',
    top: '18%',
    right: '4%'
};

const companyStyle2 = {
    position: 'absolute',
    top: '25%',
    right: '14%'
};

const companyStyle3 = {
    position: 'absolute',
    top: '35%',
    right: '9%'
};
const companyStyle4 = {
    position: 'absolute',
    top: '40%',
    right: '17%'
};
const companyStyle5 = {
    position: 'absolute',
    top: '47%',
    right: '5%'
};
const companyStyle6 = {
    position: 'absolute',
    top: '55%',
    right: '17%'
};
const companyStyle7 = {
    position: 'absolute',
    top: '66%',
    right: '6%'
};
const companyStyle8= {
    position: 'absolute',
    top: '75%',
    right: '14%'
};

class Companies extends Component {
    render(){
        return(
            <div>
                <img src={tacoBell} height={40} width={40} style={companyStyle1}/>
                <br />
                <img src={chipotle} height={40} width={40} style={companyStyle2}/>
                <br />
                <img src={shopping2} height={40} width={40} style={companyStyle3}/>

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