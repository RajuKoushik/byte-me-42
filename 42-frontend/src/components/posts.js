import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import post1 from './images/post1.jpg';


const postStyle1 = {
    position: 'absolute',
    marginLeft: '10%',
    top:'101%',
    height: '290px',
    width: '300px',
    backgroundColor: 'white',
    color: 'rgb(100, 100, 100)'
}
const postStyle2 = {
    position: 'absolute',
    marginLeft: '40%',
    top:'101%',
    height: '290px',
    width: '300px',
    backgroundColor: 'white',
    color: 'rgb(100, 100, 100)'
}
const postStyle3 = {
    position: 'absolute',
    marginLeft: '70%',
    top:'101%',
    height: '290px',
    width: '300px',
    backgroundColor: 'white',
    color: 'rgb(100, 100, 100)'
}

const eachPost = {
    height: '400',
    width: '350',

}
const textBlock = {
    opacity: '0.8'
}

const title = {
    position : 'absolute',
    marginTop : '20%',
    textAlign: 'center',
    color: 'white',
    fontFamily : 'Aveny-T Regular',
    fontSize : '30px',
    fontStyle : 'extraBold',
    width : '300px',
    background : 'rgb(241, 241, 241 , 0.4)'
}

const link = {
    color : 'rgb(71, 71, 71)',
    fontWeight : 'lighter' ,
    fontSize : '24px',
    marginLeft: '90%',
    marginTop : '60%'
}

class Posts extends Component {
    render(){
        return(
            <body>

                <div className="card" style={postStyle1} >
                    <img className="card-img-top" src={post1} alt="Card image cap" style={textBlock}/>
                    <h5 className="card-title" style={title}>CARD TITLE</h5>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content. <br />
                                <a href="#" style={link}>-></a>
                            </p>
                        </div>
                </div>
                <div className="card" style={postStyle2} >
                    <img className="card-img-top" src={post1} alt="Card image cap" style={textBlock} />
                    <h5 className="card-title" style={title}>CARD TITLE</h5>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content. <br />
                            <a href="#" style={link}>-></a>
                        </p>
                    </div>
                </div>
                <div className="card" style={postStyle3} >
                    <img className="card-img-top" src={post1} alt="Card image cap" style={textBlock}/>
                    <h5 className="card-title" style={title}>CARD TITLE</h5>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content. <br />
                            <a href="#" style={link}>-></a>
                        </p>
                    </div>
                </div>

            </body>
        );
    }

}

export default Posts;