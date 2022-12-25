import {createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';
const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})

const middleware = [thunk]
// intialise 
const store =createStore(  // takes 2 arguments 1.reducer->action item (what to do)
       reducer,// here we can not pass multiple reducer so we use "combineReducer"

       composeWithDevTools(applyMiddleware(...middleware)) // from redux dev tool extension

       // reducer -> it is a action item what u have to do for ex we have to delete,edit,add todo so we can 
       // do use using reducers

)

export default store;


// middle ware => it acts as a middle person btw the request and response from the backend
// const moddleware= (request , response , next) =>{ // next is the thing when we get response the middle ware
//                                                    redirect to the control to the next function
//}