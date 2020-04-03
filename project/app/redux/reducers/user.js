import * as Actions from "../actionTypes";

const initialState = {
    username: null,
    money: null,
}

export default function(state=initialState, action){
    switch(action.type){
        case Actions.USER_LOGIN:
            return Object.assign({}, initialState, {...action.payload});
        case Actions.USER_MONEY:
            return Object.assign({}, initialState, {...action.payload});
        default:
            return state;
    }
}


