import React from 'react';
import { Route } from 'react-router-dom';
import ProfileView from './containers/ProfileView';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/branch/:articleID/' component={ArticleDetail} />
        <Route exact path='/branch/:articleID/:branchID' component={ArticleDetail} />
        <Route exact path='/category/:categoryID' component={ArticleDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/profile' component={ProfileView} />{" "}
    </div>
);

export default BaseRouter;