import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import { connect } from "react-redux";
import CustomForm from '../components/Form';
import Branch from '../components/Branch';
import Articles from '../components/Article';
import { List } from 'antd';


class ArticleDetail extends React.Component {

    state = {
        articles: [],
        branchCount:[],
        branchTest:[],
        category :{},
        itemIds:[]
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        const branchID = this.props.match.params.branchID;
        const categoryID = this.props.match.params.categoryID;
        console.log(categoryID);
        if(typeof branchID !== "undefined"){
            console.log("branchID"+branchID)
             axios.get(`https://byte-me-backend.herokuapp.com/blog/post/${articleID}/${branchID}`)
            .then(res => {
                console.log("branch wala"+res.data)
                this.setState({
                    articles: res.data.posts
                });
                for (var i = 1; i < res.data.branch_count; i++) {
                     var postNumberObject = {branchIndex : i, firstPostId:this.state.articles[0].id};
                    this.state.branchTest.push(postNumberObject);
                } 
                this.setState({
                    branchCount: this.state.branchTest
                });
                console.log("branch count"+this.state.branchCount)
            })
        }else if(typeof categoryID !== "undefined"){
            
             axios.get(`https://byte-me-backend.herokuapp.com/blog/category/${categoryID}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    articles: res.data,
                    category: 'category'
                });
            })
        }else{
            axios.get(`https://byte-me-backend.herokuapp.com/blog/post/${articleID}`)
            .then(res => {
                console.log("branch data"+res.data)
                this.setState({
                    articles: res.data.posts
                });
                for (var i = 0; i < res.data.branch_count; i++) {
                     var postNumberObject = {branchIndex : i, firstPostId:this.state.articles[0].id};
                    this.state.branchTest.push(postNumberObject);
                } 
                this.setState({
                    branchCount: this.state.branchTest
                });
                console.log("branch count"+this.state.branchCount)
                console.log("changes after fork count"+this.state.articles)
            })
        }
        
       
    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`https://byte-me-backend.herokuapp.com/blog/post/${articleID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        if(Object.getOwnPropertyNames(this.state.category).length > 0){
             console.log("Articles called");
            return (
            <div>
                <Articles data={this.state.articles} />
            </div>
        )
        }else{
           return (
            <div>
                <Branch data={this.state.articles} branchnumber={this.state.branchCount} /> 
            </div>
        ) 
        }
        
    }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default ArticleDetail;