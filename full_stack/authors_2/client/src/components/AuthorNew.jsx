import React, { useState } from 'react'
import Header from '../views/Header'
import AuthorForm from './AuthorForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthorNew = () => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate() ; 
    const addAuthor = (newAuthor) => {
        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then(res => {console.log(res.data.author)

                setErrors([]);
                navigate('/author');
            })
            .catch(err => {
                //console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    // errorArr.push(errorResponse[key].message)
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);

            });
    }

    return (
        <div>
            <Header url="/author" textUrl="Home" text="Add a new Author:">
                <AuthorForm btnText={"Add"} submithandle={addAuthor} errors={errors} intialName={''} />
            </Header>
        </div>
    )
}

export default AuthorNew
