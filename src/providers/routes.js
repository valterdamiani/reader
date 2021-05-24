import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register/index';
import Articles from '../pages/Articles';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import NewArticle from '../pages/NewArticle';
import Article from '../pages/Article';

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Articles }/>
                <Route exact path="/login" component={ Login }/>
                <Route exact path="/register" component={ Register }/>
                <Route exact path="/settings" component={ Settings }/>
                <Route exact path="/new-article" component={ NewArticle }/>
                <Route path="/profile/:user" component={ Profile }/>
                <Route path="/article/:slug" component={ Article }/>
            </Switch>
        </BrowserRouter>
    );
}