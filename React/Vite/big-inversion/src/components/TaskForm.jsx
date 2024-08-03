import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext';

const TaskForm = (props) => {
    const [task, setTask] = useState("");
    const {AddnewTask} = useContext(TaskContext) ; 
    const addTask = (e) => {
            e.preventDefault()  ;
            //props.add(task) ;
            AddnewTask(task) ;  
            setTask("");
    }

     
    return (


        <div className=' mt-4 d-flex justify-content-center'>
            <form onSubmit={addTask} className='d-flex flex-column align-items-end border border-primary p-3 rounded-3'>
                <div className='my-3 d-flex align-items-center'>
                    <h5 className='mx-3 mt-2' >Task:</h5>
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <input className='btn btn-primary' type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TaskForm;




