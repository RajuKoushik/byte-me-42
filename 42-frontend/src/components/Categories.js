import React from 'react';
import {List, Card} from 'antd';
import axios from 'axios';

const data = [
  {
    title: 'Travel',
    categoryId: 'travel'
  },
  {
    title: 'Fashion',
    categoryId: 'fashion'
  },
  {
    title: 'Technology',
    categoryId: 'tech'
  },
  {
    title: 'Food',
    categoryId: 'food'
  },	
];

const categoryStyle = {
	width:'500px',height:'600px'
}

const Categories = (props) => {


    return (
     <List
     	 grid={{ gutter: 16, column: 4 }}
     	style={{ background: '#ECECEC', padding: '30px',alignItems: 'center',textAlign: 'center'}}
	    dataSource={data}
	    renderItem={item => (
	      <List.Item >
	       <Card >
            <List.Item.Meta title={<a href={`/category/${item.categoryId}`}>{item.title}</a>}/>
            </Card>
          </List.Item>
          
	    )}
	  />
    )

}

export default Categories;