import React from 'react';
import App from './App'
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList,{ loadData } from './components/listUsers'



export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                loadData,
                path: '/users',
                component: UsersList
            }
        ]
    }
]