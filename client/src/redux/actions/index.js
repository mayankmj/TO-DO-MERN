// api calls
import axios from 'axios';
import { ADDNEW_TODO } from './type';

const API_URL = 'http://localhost:8000'
export const addNewTodo = (data) => async (dispatch) =>{ // dispatch is using with middleware
    try{
       const res = await axios.post(`${API_URL}/todos` , {data})
       dispatch({type:ADDNEW_TODO  , payload: res.data}); // payload is the data that we set in redux coming from api
    }
    catch(error){
        console.log('Error while calling newtodo api',error.message);
    }
}