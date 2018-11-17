import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import { connect } from "react-redux";
import CustomForm from '../components/Form';
import Articles from '../components/Article';
import { List } from 'antd';
class ArticleDetail extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/blog/post/${articleID}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    articles: res.data.posts
                });
                console.log(this.state.articles)
            })
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
                <Articles data={this.state.articles} /> 
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