import React from 'react';
import { List, Card, Icon,Avatar,Button } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
        >
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
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