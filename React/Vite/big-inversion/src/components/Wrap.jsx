import React from 'react'
import TaskForm from './TaskForm'
import TaskTable from './TaskTable'

const Wrap = () => {

  return (
    <div>
        <TaskForm></TaskForm>
        {/* <TaskForm add={AddnewTask} ></TaskForm> */}
        <TaskTable></TaskTable>
    </div>
  )
}

export default Wrap
