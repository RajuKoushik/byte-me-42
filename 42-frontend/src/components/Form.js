import React from 'react';
import { Form,Input, Button } from 'antd';
import { connect } from "react-redux";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        const user_id = localStorage.getItem('token');
        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/blog/create/newpost/', {
                    title: title,
                    content: content,
                    user_id : user_id
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            default : 
            	return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        return (
        
            <Form style={{float: 'left'}} onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID )}>
            <FormItem label="Title">
                <Input name="title" placeholder="Put a title here" />
            </FormItem>
            <FormItem label="Content">
                <Input name="content" placeholder="Enter some content ..." />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </FormItem>
            </Form>
        
        );
    }
}

export default CustomForm;