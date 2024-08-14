import React, { useEffect, useState } from 'react'
import Header from '../views/Header'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const AuthorUpdate = () => {
    
    const { id } = useParams();
    
    const [errors, setErrors] = useState([]);
    const [value, setValue] = useState('');
    const [load,setLoad] = useState(false)

    const navigate = useNavigate();
   
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
        .then(res => {
            setValue(res.data.author) ; 
            setLoad(true)
        })
        .catch(err =>{})
    },[])

    const updateAuthor = (newAuthor) => {
        axios.patch("http://localhost:8000/api/authors/"+id, newAuthor)
            .then(res => {
                console.log(res.data.author)
                setErrors([]);
                navigate('/author');
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    // errorArr.push(errorResponse[key].message)
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    if(!load){
        return (
            <div>
                <Header url="/author" textUrl="Home" text="Update Author:">
                    <h3 className='text-center'> Loading ...</h3>
                </Header>
                
            </div>
        )
    }

    return (
        <div>
            <Header url="/author" textUrl="Home" text="Update Author:">
                <AuthorForm btnText={"Edit"} submithandle={updateAuthor} errors={errors} intialName={value.name}/>
            </Header>
            
        </div>
    )
}

export default AuthorUpdate
