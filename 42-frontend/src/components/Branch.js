import React, {Component} from 'react';
import { List, Avatar, Icon } from 'antd';
import { Popover, Button } from 'antd';
import { Drawer, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import * as props from "antd";
import * as ReactDOM from "antd";
import axios from 'axios';

const { Option } = Select;



const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);


const buttonStyle = {
    position : 'absolute',
    marginTop : '9%',
    backgroundColor : '#606468',
    borderColor : '#606468',
    font: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    letterSpacing : '1.7px',
    fontWeight : '100'
}

const postStyle = {
    width : '120%',
    marginLeft : '-14%',
    font: ' "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    letterSpacing : '1.7px',
    fontWeight : '100'
}


class Branch extends React.Component {
    state = { visible: false };


    constructor (props){
        super(props)
        this.state = {
            text : {},
            id :{}
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

    setItemId = (event,itemId) => {
        this.setState({id : itemId});
        this.showDrawer();
    }
    handleFormSubmit = (event, id,titleId) => {
        console.log(titleId);
        console.log(id);
        const origin_id = id;
        const title = titleId;
        const content = this.state.text;
        const user_id = localStorage.getItem('token');
        this.onClose();
        console.log(origin_id);
        return axios.post('https://byte-me-backend.herokuapp.com/blog/fork/post/', {
                    origin_id: origin_id,
                    title: title,
                    content : content,
                    user_id : user_id
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <List

                    itemLayout="vertical"
                    size="large"
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={this.props.data}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="star-o" text="156"/>]}
                            style={{ background: '#ECECEC', padding: '30px',alignItems: 'center'}}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src="http://www.sticomputer.com/newwebsite/wp-content/uploads/2018/03/Blog-Post-Icon-Navy-Blue-100x100.jpg"/>}
                                //title={<a href={`/branch/${item.id}`}>{item.title}</a>}
                                description={item.user_id}
                            />

                            <div>
                                <Button type="primary" style = {buttonStyle} onClick={(event) => this.setItemId(event,item.id)}>
                                    >
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
                                            this.state.id,item.title)} type="primary">Submit</Button>
                                    </div>
                                </Drawer>
                            </div>
                            {item.content}
                        </List.Item>

                    )}

                />
                <List
                  grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 20, xxl: 3 }}
                  dataSource={this.props.branchnumber}
                  renderItem={item => (
                    <List.Item>
                      <Button href={`/branch/${item.firstPostId}/${item.branchIndex}`} type="primary">{item.branchIndex}</Button>
                    </List.Item>
                  )}
               />

            </div>




        );
    }

}

const App = Form.create()(Branch);

export default App;
