import * as Actions from './actionTypes';

/**
 * Stores the username into the redux store
 * 
 * @param {String} username
 */
export const loginUser = (username)=>({
    type: Actions.USER_LOGIN,
    payload: {
        username
    }
});

/**
 * Stores the username into the redux store
 * 
 * @param {Number} username
 */
export const userMoney = (money)=>({
    type: Actions.USER_MONEY,
    payload: {
        money
    }
});