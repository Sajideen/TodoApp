import React from 'react';
import {useDispatch} from 'react-redux'
import {addTask} from '../Services/action/action'
import cuid from 'cuid';



const AddTodoTask = () => {
    const [tasks, setTasks] = React.useState("");
    const dispatch = useDispatch();
    const handleInputChange = (e) =>{
        setTasks(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
       dispatch(addTask({task:tasks, id:cuid()}))
        e.target.userInput.value = "";
    }
    return(
        

        <>
        <form onSubmit={handleFormSubmit}>
        <input type="text" name="userInput"
        onChange={(e)=>handleInputChange}
         />
         <button type='submit'>Add Todo</button>
         </form>
        </>
    )
} 
export default AddTodoTask;