import {    createStore,ApplyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default () => {
    const store = createStore(reducers,{},ApplyMiddleware(thunk))
    return store;
}