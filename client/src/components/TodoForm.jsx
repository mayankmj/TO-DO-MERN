import { useState } from "react"
// redux => 1.database for front-end , stores all the state of the front end
//          2.to manage more components(conataining states) 
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

// all the api calls are running through redux
const TodoForm =() => {

    const [text,settext] = useState("");

    const dispatch = useDispatch();
    const onFormSubmit = (e) =>{
        e.preventDefault();

        // here we can call api but as we are using redux , in redux we dispatch our actions
        dispatch(addNewTodo(text)); // will call addNewTodo from index.js
        settext('');
    }
    const onInputchnage =(e) =>{
        settext(e.target.value);
    }
    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input placeholder="Enter new todo..."   className="input"
            onChange={onInputchnage}
            value={text}
            />
        </form>
    )
}
//
export default TodoForm;