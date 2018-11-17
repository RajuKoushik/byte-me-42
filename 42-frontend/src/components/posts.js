import React, {Component} from 'react';
import './css/bootstrap.min.css';
import post1 from './images/post1.jpg';
import axios from 'axios'

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

class Posts extends Component {

 constructor(props){
    super(props);
     this.state = {
        home_page_posts : []
    }
 }

    
    async componentDidMount() {
        try {
           fetch('https://www.google.com/').
           then(result => {
            return {"posts" : [{"current_user": "test", "post_name": "Dusra Post", "post_content": "FIr muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"},
                                     {"current_user": "test2", "post_name": "Dusra Post k", "post_content": "FIr muje hi aana pada k", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"}]};
                                     // return result.json();
           }).then(data => {
                let posts = data.posts.map(post =>{
                    return (

                        <div>
                        <img className="card-img-top" src={post1} alt="Card image cap" /> 
                        <div className="card-body">
                            <h5 className="card-title">{post.post_name}</h5>
                            <p className="card-text">{post.post_content}</p>
                            <a onClick={this.props.onPostSelect} className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    )
                })
                 this.setState({home_page_posts: posts}); 
           })
           
         
            
         
        } catch (e) {
          console.log(e);
        }
    }

    render(){
        return(
            <body>
                <div className="card" style={postStyle1} >   
                    {this.state.home_page_posts}
                </div>
            </body>
        );
    }


}

export default Posts;