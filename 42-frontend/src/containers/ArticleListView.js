import React from 'react';
import axios from 'axios';
import Articles from '../components/Article';
import CustomForm from '../components/Form';

class ArticleList extends React.Component {

    state = {
        articles: [],
        streamers:[]
    }

    componentDidMount() {
    	console.log(localStorage.getItem('token'));
    	//console.log(localStorage.getItem('posts'));
    	//console.log("length"+this.state.articles.length);
    	const userId = localStorage.getItem('token');
    	if(localStorage.getItem('token') == null){
    		console.log("akash");
    		axios.get(
        			'http://127.0.0.1:8000/blog/home_posts/'
        		)
            .then(res => {
            	this.setState({
                    articles: res.data
           		})
           		console.log(this.state.articles)
    		});
    	}else{
    		axios.get(
        			'http://127.0.0.1:8000/blog/user_home_posts/',
        			{
        				params:{
        					user_id : userId
        				}
        			}
        		)
    		.then(res => {
    			console.log("testing"+res.data.posts_new.title)
    			if(res.data.posts_new.title = "undefined"){
    				this.state.streamers.push(res.data.posts_new)
    			}
    			res.data.posts.map(post =>{
                   this.state.streamers.push(post)
                })
                this.setState({
                    articles: this.state.streamers
           		})
           		console.log(this.state.streamers.id)
           		console.log(this.state.articles)
    		});
    	}
       // console.log("length"+this.state.articles.length);
    }

    render() {
    	if(localStorage.getItem('token') == null){
    		return (
	            <div>
	                <Articles data={this.state.articles} />
	            </div>
	        )
    	}else{
    		return (
	            <div>
	                <Articles data={this.state.articles} />
	                <br />
	                <h2>Create an article</h2>
	                <CustomForm 
	                    requestType="post"
	                    articleID={null}
	                    btnText="Create" />
	            </div>
        	)
    	}
    }
}

export default ArticleList;