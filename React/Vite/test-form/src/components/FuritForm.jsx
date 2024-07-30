import React from "react";
import { useState } from "react";
const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];
function FuritForm(props){

    const [selectedFruit,setSelectedFruit] = useState(fruits[0]) ; 
    const [ischeck,setIsCheck] = useState(false) ;

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit+ ' is' + (ischeck ? '' : ' not') + ' tasty!');
    }
    return(
        
         <form onSubmit={handleSubmit}>
            <select value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                {fruits.map( (fruit, idx) => 
                    <option key={idx} value={fruit}>{fruit}</option>
                )}
            </select>
            <label>
                <input type="checkbox" checked={ischeck} onChange={e => setIsCheck(e.target.checked)}/> Is it tasty?
            </label>
            <button>Take a bite!</button>
        </form>
    );

}
export default FuritForm ; 


