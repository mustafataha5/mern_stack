

import React, { useContext } from "react";
import MyContext from "../context/MyContext";






const MyComponent = () => {
    const context = useContext(MyContext) ; 

    return (
        <div>
                <p>ddddd</p>
                <p>{context}</p>
        </div>
    );
}


export default MyComponent ; 