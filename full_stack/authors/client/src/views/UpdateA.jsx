import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm';

const update = ({authorList,setAuthorList}) => {

    const {id} = useParams() ; 
    const [name, setName] = useState('') ;
    const [loaded,setLoaded] =useState(false) ;  

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
        .then(res => { setName(res.data.author.name)
                  setLoaded(true) ; 
        })
        .catch(err => console.log(err));
    },[])

  const updateAuthor = (newAuhtor) => {
      axios.patch("http://localhost:8000/api/authors/"+id,newAuhtor)
      .then(res => { 
        const newList = authorList.slice(); 
        setAuthorList(newList.map(author => author._id ==id ? newAuhtor : author))
        setName(res.data.author.name)
}).catch(err => console.log(err));
  }
  return (
    <div>
      {
        loaded && <AuthorForm initalName={name} submitHandle={updateAuthor} text='Edit'  ></AuthorForm>
      }
    </div>
  )
}

export default update
