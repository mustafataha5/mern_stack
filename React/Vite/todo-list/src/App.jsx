import { useState } from 'react'
// import './App.css'
import InputForm from './components/InputForm'
import { useEffect, useRef } from 'react';

function App() {
  const [data, setData] = useState([])
  const isInitialLoad = useRef(true)

  
  //load data 
  useEffect(() => {
    const newData = localStorage.getItem('tasks')
    if (newData) {
      console.log("new data ------" + newData);
      setData(JSON.parse(newData));
    }
  }, []);

  //save data on loaclstorge 
  useEffect(() => {
    if(isInitialLoad.current){
        isInitialLoad.current = false ; 
    }
    else{
      localStorage.setItem('tasks', JSON.stringify(data))
      console.log("save data ------" + data);
    }
  }, [data])

  const AddTask = (newdata) => {

    setData([...data, newdata]);
  };

  const checkChange = (checked, index) => {
    const newData = data.map((task, i) => index === i ? { ...task, complete: checked } : task);
    //console.log(i + "------" + data.length + "  ---------" + checked)
    //newData[i].complete = checked;
    // console.log(i+"------"+data[i].complete)
    setData(newData);
  }

  const deleteTask = (index) => {
    setData(data.filter((_, i) => i !== index))
  }

  return (
    <>
      <InputForm onAdd={AddTask} ></InputForm>

      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <div className='card border-light '>
            <h3 className='card-title text-center'>My Task:</h3>
            <div className='card-body '>

              <table className='table table-md '>
                <tbody>

                  {data.length > 0 && data.map((task, i) =>
                    <tr className='' key={i} >
                      <td className=' text-end'>
                        {task.complete ? <p><del>{task.task}</del></p> : <p  >  {task.task} </p>}

                      </td>

                      <td>
                        <input className='mb-4' type="checkbox" checked={task.complete} onChange={(e) => checkChange(e.target.checked, i)} />
                      </td>
                      <td>
                        <button className='btn btn-sm btn-dark' onClick={() => deleteTask(i)}>Delete</button>
                      </td>
                    </tr>
                  )
                  }
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
