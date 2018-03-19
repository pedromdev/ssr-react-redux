import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore , applyMyddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const store = createStore(reducers,{},applyMyddleware(thunk));
ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);