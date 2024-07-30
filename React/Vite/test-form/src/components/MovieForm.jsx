import React from "react";
import { useState } from "react";

function MovieForm(){

    const [title,setTitle] = useState("") ; 
    const [titleError,setTitleError] = useState("") ; 

    const handleTitle = (e) => {
        setTitle(e.target.value) ; 
        if(e.target.value.length < 1 ){
            setTitleError("Title is required!") ; 
        }
        else if (e.target.value.length<3){
            setTitleError("Title must be 3 characters or longer!") ; 
        }
        else {
            setTitleError("") ; 
        }
    }

    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div><label htmlFor="">Title</label>
                <input type="text" value={title} onChange={handleTitle} />
                {
                    titleError ? 
                    <p className="error">{titleError}</p>
                    :''
                }
            </div>
            {
                titleError ?
                <input type="submit" value="Create Movie" disabled /> : 
                <input type="submit" value="Create Movie" />
            }
        </form>
    );

}

export default MovieForm ; 


