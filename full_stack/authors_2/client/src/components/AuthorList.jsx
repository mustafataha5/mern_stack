import React, { useEffect, useState } from 'react'
import Header from '../views/Header'
import axios from 'axios'
import DeleteButton from './DeleteButton';
import { Link, useNavigate } from 'react-router-dom';
const AuthorList = () => {

   const [authorList,setAuthorList] = useState([]) ; 
   const [load ,setLoad] = useState(false) ; 
   const navigate = useNavigate()
   
   useEffect(()=>{
    axios.get("http://localhost:8000/api/authors")
    .then(res => {
        console.log(res.data.authors) ;
        setAuthorList(res.data.authors)
        setLoad(true)
    })
    .catch(err => console.log(err))
   },[])


   const deleteAuthor = (id)=>{
        axios.delete("http://localhost:8000/api/authors/"+id)
    .then(res => {
      //  console.log(res.data.author) ;
        setAuthorList(authorList.filter(author => author._id != id) );
    })
    .catch(err => console.log(err));

   }

   if(!load){
    return(
        <Header url="/author/new" textUrl="Add new Author"  text="We have quotes By:">
            <h5 className='m-5'>Loading ... </h5>
        </Header>

    )
   }

  return (
    <div>
        <Header url="/author/new" textUrl="Add new Author"  text="We have quotes By:">


            <table className='table table-bordered border-dark text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { authorList.length>0 && authorList.map((author,i)=>{
                       return ( 
                        <tr key={i}>
                            <td><Link to={"/author/"+author._id+"/edit"}> {author.name} </Link></td>
                            <td> <DeleteButton delFunction={()=>deleteAuthor(author._id)}/> </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </Header>
      
    </div>
  )
}

export default AuthorList
