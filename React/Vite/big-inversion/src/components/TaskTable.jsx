import React, { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../context/TaskContext'

const TaskTable = () => {

    const {tasks,deleteTask,doneTask} = useContext(TaskContext) ; 
  return (
    <div className='d-flex justify-content-center'>
    <table className="table  w-25 text-center mt-5">
      <tbody>
        {tasks.length > 0 && tasks.map((task, i) => (<Task task={task} key={i}  ></Task>))}
      </tbody>
    </table>
  </div>
  )
}

export default TaskTable
