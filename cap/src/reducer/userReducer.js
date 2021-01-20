import initialState from './initialState';
import * as types from '../actions/actiontypes';

export default function userReducer(state=initialState,action){
    switch (action.type) {

        case types.LOAD_USERS_SUCCESS:
         // return action.users;
          return {
            ...state,users:action.users
           // Object.assign({}, action.users)
          };
        case types.ADD_PRODUCT_SUCCESS:
          return [
            ...state,
            Object.assign({}, action.user)
          ];
    
        case types.GET_PRODUCT_DETAILS:
         // return action.user;
    
          return {
           ...state, userDetail:action.user
          }
    
        case types.DELETE_PRODUCT_SUCCESS:
          return [
            ...state,
            Object.assign({}, action.user)
          ];
        // case types.ADD_USER_SUCCESS:
        //   return [
        //     ...state,
        //     Object.assign({}, action.user)
        //   ];
        default:
          return state;
      }

}