import React, {Component} from 'react';

import food1 from "./images/food1.png";
import food2 from "./images/food2.png";
import shopping1 from "./images/shopping.png";
import tacoBell from "./images/tacoBell.svg";
import chipotle from "./images/chipotle.png";
import shopping2 from "./images/shopping2.jpg";
import shopping3 from "./images/shopping3.svg";
import tech1 from "./images/tech1.png";
import tech2 from "./images/tech2.png";
import travel1 from "./images/travel1.png";
import adidas from "./images/adidas.png";
import crocs from "./images/crocs.png";
import gucci from "./images/gucci.png";
import hilton from "./images/hilton.png";
import nike from "./images/nike.png";
import mac from "./images/mac.jpg";
import sephora from "./images/sephora.png";
import starbucks from "./images/starbucks.png";
import walmart from "./images/walmart.svg";


const companyStyle1 = {
    position: 'absolute',
    top: '18%',
    right: '4%'
};

const companyStyle2 = {
    position: 'absolute',
    top: '22%',
    right: '14%'
};

const companyStyle3 = {
    position: 'absolute',
    top: '30%',
    right: '9%'
};
const companyStyle4 = {
    position: 'absolute',
    top: '20%',
    right: '4%'
};
const companyStyle5 = {
    position: 'absolute',
    top: '40%',
    right: '4%'
};
const companyStyle6 = {
    position: 'absolute',
    top: '50%',
    right: '10%'
};
const companyStyle7 = {
    position: 'absolute',
    top: '60%',
    right: '4%'
};
const companyStyle8= {
    position: 'absolute',
    top: '63%',
    right: '14%'
};
const companyStyle9= {
    position: 'absolute',
    top: '40%',
    right: '14%'
};
const companyStyle10= {
    position: 'absolute',
    top: '70%',
    right: '8%'
};
const companyStyle11= {
    position: 'absolute',
    top: '82%',
    right: '13%'
};
const companyStyle12= {
    position: 'absolute',
    top: '90%',
    right: '9%'
};
const companyStyle13= {
    position: 'absolute',
    top: '84%',
    right: '2%'
};
const companyStyle14= {
    position: 'absolute',
    top: '75%',
    right: '4%'
};
const companyStyle15= {
    position: 'absolute',
    top: '76%',
    right: '4%'
};



class Companies extends Component {
    render(){
        return(
            <div >
                <img src={tacoBell} height={0} width={40} style={companyStyle1}/>
                <br />
                <img src={chipotle} height={70} width={70} style={companyStyle2}/>
                <br />
                <img src={shopping3} height={40} width={40} style={companyStyle5}/>
                <br />
                <img src={tech1} height={40} width={40} style={companyStyle6}/>
                <br />
                <img src={tech2} height={40} width={40} style={companyStyle7}/>
                <br />
                <img src={travel1} height={40} width={40} style={companyStyle8}/>
                <br />
                <img src={adidas} height={40} width={40} style={companyStyle3}/>
                <br />
                <img src={crocs} height={50} width={55} style={companyStyle9}/>
                <br />
                <img src={hilton} height={55} width={60} style={companyStyle10}/>
                <br />
                <img src={gucci} height={40} width={40} style={companyStyle11}/>
                <br />
                <img src={nike} height={40} width={40} style={companyStyle12}/>
                <br />
                <img src={mac} height={50} width={50} style={companyStyle13}/>
                <br />
                <img src={sephora} height={40} width={40} style={companyStyle14}/>
                <br />
                <img src={starbucks} height={40} width={40} style={companyStyle15}/>
                <br />
                <img src={walmart} height={65} width={65} style={companyStyle4}/>
            </div>
        );
    }
}

export default Companies;