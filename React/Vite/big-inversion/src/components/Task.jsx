import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const Task = ({ task}) => {
 
    const {doneTask ,deleteTask} = useContext(TaskContext) ; 
   const changeTaskDone = () => {
            doneTask(task.id) ;
   }    

    return (
        <tr >
            <td className='text-end'> {task.done ? <p><del>{task.data}</del></p> : <p>{task.data}</p>}</td>
            <td><input type="checkbox" checked={task.done} onChange={changeTaskDone}  aria-label={`Mark ${task.data} as done`} /></td>
            <td className='text-start'><button className='btn btn-dark btn-sm' onClick={()=>deleteTask(task.id)}>Delete</button></td>
        </tr>
    )
}

export default Task
