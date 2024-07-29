

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import './style11.css';
import Advertisement from './components/Advertisement';


 
                
function App() {
  return (
    <div >
        <Header></Header>
        <div className="Nav_Main">
        <Navigation></Navigation>
        <Main>
            <div className="subcontents">
            <SubContents></SubContents>
            <SubContents></SubContents>
            <SubContents></SubContents>
            </div>
            <Advertisement></Advertisement>
        </Main>

        </div>
      
{/*         <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main> */}
    </div>
  );
}
                
export default App;


