import React, {Component} from 'react';
import './css/bootstrap.min.css';
import post1 from './images/post1.jpg';
import './posts.css'


const postStyle1 = {
    position: 'absolute',
    marginLeft: '25%',
    marginTop: '-35%',
    marginBottom : '25%',
    height: '20%',
    width: '30%',
    backgroundColor: 'rgb(231, 231, 231)',
    color: 'rgb(100, 100, 100)',

}
// const postStyle2 = {
//     position: 'absolute',
//     marginLeft: '40%',
//     top:'101%',
//     height: '290px',
//     width: '300px',
//     backgroundColor: 'white',
//     color: 'rgb(100, 100, 100)'
// }

const textBlock = {
    opacity: '0.8'
}

const title = {
    position : 'absolute',
    marginTop : '2%',
    marginLeft : '-6%',
    textAlign: 'center',
    height : '30%',
    color: 'rgb(102, 100, 100)',
    fontFamily : 'Marvel, sans-serif',
    fontSize : '40%',
    fontStyle : 'extraBold',
    width : 'auto'
}

const content = {
    position : 'absolute',
    marginTop : '8%',
    marginLeft : '-6%',
    height : '20%',
    color: 'rgb(102, 100, 100)',
    fontFamily : 'Marvel, sans-serif',
    fontSize : '35%',
    fontStyle : 'extraBold',
    width : 'auto'
}

const button = {
    fontSize : '33%',
    position : 'absolute',
    marginTop : '5%',
    marginLeft : '90%'
}

const img = {
    opacity : '0.7'
}

const eachPost = {
    marginBottom : '20%'
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
           fetch('http://ec2-18-220-22-245.us-east-2.compute.amazonaws.com:8080/blog/all_post/').
           then( result => {
               return {"posts" : [{"author": "test", "title": "Dusra Post", "content": "FIr muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"},
                       {"author": "test2", "title": "Dusra Post k", "content": "FIr muje hi aana pada k", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"}]};
        }).then(data => {
                let posts = data.posts.map(post =>{
                    return (

                        <div>
                        <img className="card-img-top" src={post1} style = {img} alt="Card image cap" />
                        <div className="card-body" style = {eachPost}>
                            <h5 className="card-title" style = {title}>{post.title}</h5>
                            <p className="card-text" style = {content}>{post.content}</p>
                            <a onClick={this.props.onPostSelect} style = {button} > > </a>
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