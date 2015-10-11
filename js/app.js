import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router'

import styles from '../css/styles.sass'

import App from './components/App.react';

var routes = (
    <Route handler={App} path="/">
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
