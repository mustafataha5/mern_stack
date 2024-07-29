// import logo from './logo.svg';
// import './App.css';
// import SomeOtherComponent from './components/MyComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <SomeOtherComponent></SomeOtherComponent>
//       </header>
//     </div>
//   );
// }
// export default App;
import React from 'react';
 
import { Provider } from 'styletron-react';
 
import { Client as Styletron } from 'styletron-engine-atomic';
 import SomeOtherComponent2 from './components/MyComponent2';
const engine = new Styletron();
 
function App() {
    return (
        <Provider value={engine}>
            {/* your other components go in here */}
            <SomeOtherComponent2></SomeOtherComponent2>
        </Provider>
    )
}
 
export default App;


