import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router'

import styles from '../css/styles.sass'

import App from './components/App.react';
import Category from './components/Category.react'

var routes = (
    <Route path="/">
        <Route path="category/:category" handler={Category} />
        <DefaultRoute handler={App} />
    </Route>
);

let router = Router.create({
    routes: routes
});

router.run(function (Handler) {
    React.render(
        <Handler />,
        document.getElementById('app')
    );
});
