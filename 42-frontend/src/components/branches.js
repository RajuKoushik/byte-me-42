import React, {Component} from 'react';
import './branch.css';
import pitchfork from './images/pitchfork.jpg';

const branch1 = {
    position: 'relative',
    marginTop : '2%',
    textAlign : 'center',
    height: '20%',
    maxWidth : '40%',
    marginLeft: '30%',
    padding : '1%',
    fontFamily: 'Marvel, sans-serif',
    fontSize : '148%',
    color : '#565454',
    backgroundColor : 'rgb(211, 208, 208, 0.6)',
    boxShadow :'3px, 3px'
}

const title = {
    textAlign : 'center',
    fontFamily : '"Marvel", sans-serif',
    fontSize  : '280%',
    marginTop: '1%',
    color : '#DED6D6'
}


class Branches extends Component{
    render(){
        return(
            <body >
            <h1 style={title}>WHAT DO YOU WANNA WRITE ABOUT ? </h1>
            <div className="row">
                <div className="col-md-8" style={branch1} >
                    <div className="row">
                        <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. </div>
                    </div>
                </div>
                <div className="col-md-8" style={branch1} >
                    <div className="row">
                        <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. </div>
                    </div>
                </div>
                <div className="col-md-8" style={branch1} >
                    <div className="row">
                        <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. </div>
                    </div>
                </div>
                <div className="col-md-8" style={branch1} >
                    <div className="row">
                        <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. </div>
                    </div>
                </div>
            </div>
            </body>
        );
    }
}

export default Branches;