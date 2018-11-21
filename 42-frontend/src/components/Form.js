import React,{Component} from 'react';
import { Form,Input, Button,Drawer,Col,Row,Select,DatePicker } from 'antd';
import { Menu, Dropdown, Icon, message } from 'antd';
import { connect } from "react-redux";
import * as props from "antd";
import * as ReactDOM from "antd";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

const { Option } = Select;

const buttonStyle = {
    width: '20%',
    height : '4.5%',
    position : 'absolute',
    marginTop : '19%',
    marginRight : '38%',
    backgroundColor : '#606468',
    borderColor : '#606468',
    font: ' "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    letterSpacing : '1.7px',
    fontWeight : '100'

}

const postStyle = {
    width : '120%',
    marginLeft : '-14%'
}

const titleStyle = {
    font: ' "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    letterSpacing : '1.7px',
    fontWeight : '100'
}




class CustomForm extends React.Component {

state = { visible: false };


    constructor (props){
        super(props)
        this.state = {
            text : {},
            title:{}
        }
    }

    state = {
        visible: false,
    }

    hide = () => {
        this.setState({
            visible: false,
        });
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    handleContentChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }



    handleFormSubmit = (event, articleID) => {
        const title = this.state.title;
        const content = this.state.text;
        const user_id = localStorage.getItem('token');
        console.log(user_id);
        this.onClose();
       return axios.post('https://byte-me-backend.herokuapp.com/blog/create/newpost/', {
                    title: title,
                    content: content,
                    user_id : user_id,
                    category : 'travel'
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        
            <div style={{ background: '#ECECEC', padding: '30px',alignItems: 'center',textAlign: 'center'}}>
                <Button type="primary" style = {buttonStyle} onClick={this.showDrawer}>
                    CREATE  POST
                </Button>
                <Drawer
                    title = "FORK"
                    width={420}
                    placement="right"
                    onClose={this.onClose}
                    maskClosable={false}
                    visible={this.state.visible}
                    style={{
                        height: 'calc(100% - 55px)',
                        overflow: 'auto',
                        paddingBottom: 53,
                        fontFamily: 'Marvel, sans-serif',
                        fontSize : '20%'
                    }}


                >
                    <Form layout="vertical" hideRequiredMark>
                         <Row gutter={16} style={postStyle}>
                            <Col span={24}>
                                <Form.Item style={titleStyle} label="title" >
                                    {getFieldDecorator('title',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'please enter your title',
                                                },
                                            ],
                                        })(<Input.TextArea name="content" style = {postStyle} rows={4} placeholder="please enter your title" value={this.state.title} onChange = {this.handleTitleChange}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16} style={postStyle}>
                            <Col span={24}>
                                <Form.Item style={titleStyle} label="content" >
                                    {getFieldDecorator('content',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'please enter your content',
                                                },
                                            ],
                                        })(<Input.TextArea name="content" style = {postStyle} rows={4} placeholder="please enter your content" value={this.state.text} onChange = {this.handleContentChange}/>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e8e8e8',
                            padding: '10px 16px',
                            textAlign: 'right',
                            left: 0,
                            background: '#fff',
                            borderRadius: '0 0 4px 4px',
                        }}
                    >
                        <Button
                            style={{
                                marginRight: 8,
                            }}
                            onClick={this.onClose}
                        >
                            Cancel
                        </Button>
                        <Button htmlType="submit" onClick={(event) => this.handleFormSubmit(
                            event,
                            this.props.articleID)} type="primary">Submit</Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}

const App = Form.create()(CustomForm);

export default App;