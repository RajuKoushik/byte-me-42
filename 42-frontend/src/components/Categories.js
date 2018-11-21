import React from 'react';
import {List, Card} from 'antd';
import axios from 'axios';

const data = [
  {
    title: 'TRAVEL',
    categoryId: 'travel'
  },
  {
    title: 'FASHION',
    categoryId: 'fashion'
  },
  {
    title: 'TECHNOLOGY',
    categoryId: 'tech'
  },
  {
    title: 'FOOD',
    categoryId: 'food'
  },	
];

const categoryStyle = {
    font: '150% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    letterSpacing : '2.3px',
    fontSize: '50px',
    fontWeight : '700'
}

const Categories = (props) => {


    return (
     <List
     	 grid={{ gutter: 16, column: 4 }}
     	style={{ background: '#ECECEC', padding: '30px', alignItems: 'center', textAlign: 'center', fontSize: '70%'}}
	    dataSource ={data}
	    renderItem={item => (
	      <List.Item >
	       <Card >
            <List.Item.Meta style={categoryStyle} title={<a href={`/category/${item.categoryId}`}>{item.title}</a>}/>
            </Card>
          </List.Item>
          
	    )}
	  />
    )

}

export default Categories;