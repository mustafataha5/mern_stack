import { useState } from 'react'
import './App.css'
import BoxForm from './components/BoxForm';
import Box from './components/Box';

function App() {
  const [boxs, setBoxs] = useState([])

  const addNewBox = (color,size) => {
    const newBoxs = boxs.slice();
    newBoxs.push({color,size});
    setBoxs(newBoxs);

  }
  const clearAllBoxs = ()=> {
    setBoxs([]) ;
  }
  // console.log(Boxs) ;
  return (
    <>
      <BoxForm makeBox={addNewBox} clearBoxs={clearAllBoxs}/>
      <div className='row my-4'>
        {boxs.map( (box) => {
         
         return (<Box color={box.color} size={box.size+"px"}></Box>);
          
       })}
        </div>
     
    </>
      )
}

      export default App
