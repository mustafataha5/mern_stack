import React from "react";
import { useState } from "react";



function MessageForm(props){
    const [message,setMessage] = useState("") ; 

    const handle = (e) => {
        e.preventDefault() ;
        props.writeMessage(message); 
        setMessage("") 

    }
    return(
        <>
            <form onSubmit={handle}>
                <h1>Set Message</h1>
                <textarea
                    rows="4"
                    cols={50}
                    placeholder="Enter your message here" 
                    onChange={(e)=> setMessage(e.target.value)}
                    value={message}
                >
                 

                </textarea>
                <input type="submit" value="Send Message" />   
            </form>
        </>
    );
}
export default MessageForm ; 


