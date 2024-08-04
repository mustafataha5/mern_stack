import { useState, useReducer, useEffect, useRef, useCallback } from 'react'
// import './App.css'
import TaskForm from './components/TaskForm'
import Task from './components/Task';
import Wrap from './components/Wrap';
import { TaskContext } from './context/TaskContext';
let inedxId = 0;
const initialState = []
const StateReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return ([...state, action.data]);

    case 'load':
      return action.data;  
    case 'update':
      return state.map((task) => {
        if (task.id === action.id) {
          return {...task,done:!task.done};
        }
        return task;
      });
    case 'delete':
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }

}

function App() {


  const [tasks, dispatch] = useReducer(StateReducer, initialState);
  const initialLoad = useRef(true) ; 
  //const [tasks, setTasks] = useState([]);
  //load data
  useEffect(() =>{
    
    const mydata = localStorage.getItem('tasks') ;
    if(mydata!==null){
      dispatch({type:'load',data:JSON.parse(mydata)});
    } 
  },[]);
  //save data
  useEffect(()=>{
    if(initialLoad.current ){
       initialLoad.current = false ; 
    }
    else{
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks to localStorage:', error);
      }
    }
  },[tasks]);

  const AddnewTask = useCallback((text) => {
    if (text.length > 0) {
      dispatch({ type: 'add', data: { id: inedxId++, data: text, done: false } })
    }
    return 
    // setTasks([...tasks, { id: inedxId++, data: text, done: false }]);
  },[]) ; 

  const deleteTask =useCallback( (index) => {
    dispatch({ type: 'delete', id: index });
    // setTasks(tasks.filter((task) => task.id !== index));
  },[]) 

  const doneTask = useCallback( (index) => {
    dispatch({ type: 'update', id: index });
   
  },[]) ; 

  return (
    <>
      <TaskContext.Provider value={{tasks,AddnewTask,deleteTask,doneTask}}>
      <Wrap></Wrap>
      </TaskContext.Provider>
    
    </>
  )
}

export default App

  // {/* <TaskForm add={AddnewTask} ></TaskForm> */}

  //     {/* <div className='d-flex justify-content-center'>
  //       <table className="table  w-25 text-center mt-5">
  //         <tbody>
  //           {tasks.length > 0 && tasks.map((task, i) => (<Task task={task} key={i} onToggle={doneTask} delTask={deleteTask} ></Task>))}
  //         </tbody>
  //       </table>
  //     </div> */}
