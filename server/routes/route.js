import express from 'express';
// import { deleteTodo } from '../../client/src/redux/actions/index.js';
// import { DELETE_TODO } from '../../client/src/redux/actions/type.js';
import { addTodo, getAllTodos, toggleTodoDone , updateTodo , deleteTodo} from '../controller/todo-controller.js';

const route = express.Router();


// first enter '/' -> end point , work to do on end point -> 
route.post('/todos',addTodo)
route.get('/todos',getAllTodos);
route.get('/tods/:id' , toggleTodoDone)
route.put('/todos/:id',updateTodo)
route.delete('/todos/:id',deleteTodo)

export default route