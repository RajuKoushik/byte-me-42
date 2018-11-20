import React from 'react';
import { List, Card, Icon,Avatar,Button } from 'antd';

import axios from 'axios';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

 const updateSomething = () => {
    console.log("like test")
    axios.get(`127.0.0.0:8000/blog/post_id/like/userId`)
        .then(res => {
            this.setState({
                likes_count: res.data
            });
        })

}

const Branch = (props) => {
	console.log("props data"+props.branchnumber);
    return (
    <div>
    <List
        itemLayout="vertical"
        size="medium"
        grid={{ gutter: 16, column: 1 }}
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            key={item.title}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
        >
            <List.Item.Meta
            avatar={<Avatar src="http://www.sticomputer.com/newwebsite/wp-content/uploads/2018/03/Blog-Post-Icon-Navy-Blue-100x100.jpg" />}
            title={<a href={`/branch/${item.id}`}>{item.title}</a>}
            description={item.author}
            />
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
    )
}

export default Branch;