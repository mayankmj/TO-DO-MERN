import { deleteTodo, toggleTodo , updateTodo} from "../redux/actions";
import {useDispatch }  from "react-redux";
import { useState } from "react";

// import Tabs from './Tabs';
const Todo = ({todo}) =>{

    const[editing, setEditing] = useState(false);
    const[text,setText] = useState(todo.data)

    const dispatch = useDispatch();

    const onFormSubmit = (e) =>{
        e.preventDefualt();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id , text))
    }
    return(
        <li   className="task"
           onClick={ () => dispatch(toggleTodo(todo._id))}
           style = { { 
              textDecoration: todo?.done ? 'line-through' : '',
              color: todo?.done ? '#bdc3c7' : '#34495e'
           }}
        >
            <spam style = {{ display : editing ? 'none' : ''}}>{todo?.data}</spam>

            <form
                style = {{ display : editing ? 'inline' : 'none'}}
                onSubmit={onFormSubmit}
              >
                <input 
                   type="text"
                   value={text}
                   className="edit-todo"
                   onChange={(e) => setText(e.target.value)}
                   />
            </form>
            <spam className="icon" onClick={ () => dispatch(deleteTodo(todo._id))}>
              <i className="fas fa-trash"/>

            </spam>
            <spam className="icon" onClick={() => setEditing(prevState => !prevState)}>
               <i className="fas fa-pen" />
            </spam>
        </li>
    )
}

export default Todo;