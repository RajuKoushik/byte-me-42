import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import { connect } from "react-redux";
import CustomForm from '../components/Form';
import Branch from '../components/Branch';
import { List } from 'antd';
class ArticleDetail extends React.Component {

    state = {
        articles: [],
        branchCount:[],
        branchTest:[]
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        const branchID = this.props.match.params.branchID;
        if(typeof branchID !== "undefined"){
            console.log("branchID"+branchID)
             axios.get(`http://127.0.0.1:8000/blog/post/${articleID}/${branchID}`)
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
        }else{
             axios.get(`http://127.0.0.1:8000/blog/post/${articleID}`)
            .then(res => {
                console.log(res.data)
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
        }
        
       
    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Branch data={this.state.articles} branchnumber={this.state.branchCount} /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default ArticleDetail;