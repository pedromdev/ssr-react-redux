import { createStore,ApplyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'

export default () => {
    const store = createStore(reducers,{},ApplyMiddleware(thunk))
    return store;
}