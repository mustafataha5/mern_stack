import { useState } from 'react'

import './App.css'
import Tab  from './components/Tab';
import TabBody from './components/TabBody';

const tabs = [
  {title:"Tab1" ,body:"<<<<<<<<<Tab1 content shows here "},
  {title:"Tab2" ,body:"Tab2 content shows here ---------- "},
  {title:"Tab3" ,body:"Tab3 content shows here >>>>>>>>>>"},
]
const myStyle=[
      {color:"white",background:"black"},
      {color:"black",background:"white"},
      {color:"black",background:"white"},
      
]
function App() {
  // const [tabs, setCount] = useState(0)
  const [message,setMessage] = useState(tabs[0].body);
  const [tabStyle,setTabStyle] = useState(myStyle) ; 

  const chnageTab = (i) => {
    let colorSytle = Array(tabs.length).fill({color:"black",background:"white"}); 
    colorSytle[i] ={color:"white",background:"black"}; 
    setTabStyle(colorSytle);
    setMessage(tabs[i].body);
  }


  return (
    <>
      <div className='d-flex justify-content-start  '>
       {tabs.map((tab,i) => <Tab title={tab.title} tabStyle={tabStyle[i]} changeTab={() => chnageTab(i)} ></Tab>)}
      </div>
      <TabBody data={message}> </TabBody>
    </>
  )
}

export default App
