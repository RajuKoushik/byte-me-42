import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import post1 from './images/post1.jpg';


const postStyle1 = {
    position: 'absolute',
    marginLeft: '10%',
    top:'101%',
    height: '260px',
    width: '300px'
}
const postStyle2 = {
    position: 'absolute',
    marginLeft: '40%',
    top:'101%',
    height: '260px',
    width: '300px'
}
const postStyle3 = {
    position: 'absolute',
    marginLeft: '70%',
    top:'101%',
    height: '260px',
    width: '300px'
}

const eachPost = {
    height: '400',
    width: '350',

}

class Posts extends Component {
    render(){
        return(
            <body>

                <div className="card" style={postStyle1} >
                    <img className="card-img-top" src={post1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
                <div className="card" style={postStyle2} >
                    <img className="card-img-top" src={post1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={postStyle3} >
                    <img className="card-img-top" src={post1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </body>
        );
    }

}

export default Posts;