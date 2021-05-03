import {ADD_Task, DEL_Task} from '../Constants';
export const addTask = (data) => ({
    type: ADD_Task,
    data,
    id: Math.random()
})

export const deleteTask = (id) =>({
    type: DEL_Task,
    id,
})