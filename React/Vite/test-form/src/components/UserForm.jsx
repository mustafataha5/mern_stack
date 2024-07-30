import React, { useState } from  'react';
    
function UserForm (props){

    const [username, setUsername] = useState("") ; 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("") ; 
    const [hasBeenSubmitted,setHasBeenSubmitted] = useState(false); 

    const createUser = (e) => {
        e.preventDefault(); 

        const newUser = {username,email,password} ; 

        console.log("Welcome "+newUser) ; 
        setUsername("");
        setPassword("");
        setEmail("");
        setHasBeenSubmitted(true) ; 
    };
   
    
    return (
        <form onSubmit={createUser}>
            {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    }
            <div>
                <label htmlFor="">UserName: </label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    ) ; 
}
    
export default UserForm;
