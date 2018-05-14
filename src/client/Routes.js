import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList,{ loadData } from './components/listUsers'
export default [
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