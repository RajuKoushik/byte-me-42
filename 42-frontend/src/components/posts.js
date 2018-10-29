import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import post1 from './images/post1.jpg';


const postStyle1 = {
    position: 'absolute',
    marginLeft: '10%',
    top:'70%',
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

 constructor(){
    super();
     this.state = {
        postk : []

    }
 }

    
    async componentDidMount() {
        try {
           fetch('http://127.0.0.1:8000/blog/test').
           then(result => {
            return {"postk" : [{"current_user": "test", "post_name": "Dusra Post", "post_content": "FIr muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"},
                                     {"current_user": "test2", "post_name": "Dusra Post k", "post_content": "FIr muje hi aana pada k", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"}]};
           }).then(data => {
                let postk = data.postk.map(postk =>{
                    return (

                        <div>
                        <img className="card-img-top" src={post1} alt="Card image cap" /> 
                        <div className="card-body">
                            <h5 className="card-title">{postk.post_name}</h5>
                            <p className="card-text">{postk.post_content}</p>
                            <a href="#" onClick={this.onButtonClick} className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    )
                })
                 this.setState({postk: postk}); 
           })
           
         
            
         
        } catch (e) {
          console.log(e);
        }
    }

    render(){
        return(
            <body>
                <div className="card" style={postStyle1} >   
                    {this.state.postk}
                </div>
            </body>
        );
    }

    onButtonClick(event){
        console.log(event.target.value);
    }

}

export default Posts;