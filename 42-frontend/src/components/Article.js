import React from 'react';
import { List, Button, Icon } from 'antd';
import axios from 'axios';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


const Articles = (props) => {

    return (
    <List
        itemLayout="vertical"
        size="large"
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            key={item.title}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
        >
            <List.Item.Meta
            title={<a href={`/branch/${item.id}`}>{item.title}</a>}
            description={item.author}

            />
            {item.content}

        </List.Item>
        )}
    />
    )

}

export default Articles;