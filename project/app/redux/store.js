import { createStore, combineReducers } from 'redux';

import user from './reducers/user.js';
import money from './reducers/user.js';

const store = createStore(
    combineReducers({
        user,
        money,
    })
);

export default store;