import React, {Component} from 'react';
import { List, Avatar, Icon } from 'antd';
import { Popover, Button } from 'antd';
import { Drawer, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import * as props from "antd";
import * as ReactDOM from "antd";


const { Option } = Select;

import axios from 'axios';

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);


const buttonStyle = {
    opacity : '0.4',
    position : 'absolute',
    marginTop : '5%',
    backgroundColor : '#581845'

}

const postStyle = {
    width : '80%'
}


class Branch extends React.Component {
    state = { visible: false };


    constructor (props){
        super(props)
        this.state = {
            text : {}
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


    handleFormSubmit = (event, id) => {
        console.log(this.state.text);
        console.log(id);
        //const title = event.target.elements.title.value;
        //const content = event.target.elements.content.value;
        //const user_id = localStorage.getItem('token');
        //console.log(content);
        this.onClose();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <List

                    itemLayout="vertical"
                    size="large"
                    dataSource={this.props.data}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="star-o" text="156"/>]}

                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar}/>}
                                //title={<a href={`/branch/${item.id}`}>{item.title}</a>}
                                description={item.user_id}
                            />

                            <div>
                                <Button type="primary" style = {buttonStyle} onClick={this.showDrawer}>
                                    Fork
                                </Button>
                                <Drawer
                                    title="Fork"
                                    width={420}
                                    placement="right"
                                    onClose={this.onClose}
                                    maskClosable={false}
                                    visible={this.state.visible}
                                    style={{
                                        height: 'calc(100% - 55px)',
                                        overflow: 'auto',
                                        paddingBottom: 53,
                                    }}
                                >
                                    <Form layout="vertical" hideRequiredMark>
                                        <Row gutter={16} style={postStyle}>
                                            <Col span={24}>
                                                <Form.Item label="content" >
                                                    {getFieldDecorator('content',
                                                        {
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message: 'please enter your content',
                                                                },
                                                            ],
                                                        })(<Input.TextArea name="content" rows={4} placeholder="please enter your content" value={this.state.text} onChange = {this.handleContentChange}/>)}
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
                                            item.id)} type="primary">Submit</Button>
                                    </div>
                                </Drawer>
                            </div>
                            {item.content}
                        </List.Item>

                    )}

                />
                <List
                  grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 20, xxl: 3 }}
                  dataSource={props.branchnumber}
                  renderItem={item => (
                    <List.Item>
                      <Button href={`/branch/${item.firstPostId}/${item.branchIndex}`} type="primary">{item.branchIndex}</Button>
                    </List.Item>
                  )}
               />

            </div>




        );
    }


export default Branch;
