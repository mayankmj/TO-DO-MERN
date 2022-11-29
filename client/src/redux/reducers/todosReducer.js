import * as actionTypes from '../actions/type'



// state stores the prev value which is not being updated yet
// action contains the new value to be updated
export const todosReducers =(state = [], action) =>{ // state = [] is initialise as an empty array
    // action.type is used as differentiating the different calls
    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
             return[action.payload , ...state]// we get payload containing value from the call 
        case actionTypes.GETALL_TODO:
            return action.payload
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo, done: !todo.done} : todo
            ))
        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo, data: action.payload.data} : todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo => 
                todo._id !== action.payload._id) 
        default:
            return state;     

    }
}