import {createStore} from 'redux';
import reducer from './reducers/shop'

const store  = createStore(reducer, {
    shop : []
})
export default store;