import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';
const AuthorList = ({authorList,setAuthorList}) => {

   // const [authorList, setAuthorList] = useState([]);
    const navigate = useNavigate() ;

  
    const toEdit = (id) => {
        navigate('/author/'+id);
    }

    const toDelete = (id)=>{
            axios.delete("http://localhost:8000/api/authors/"+id)
            .then(res => { setAuthorList(authorList.filter((author) => author._id!=id))  })
            .catch(err => { console.log(err) });        
    }
    return (
        <div>
            <table className='table text-center'>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.length > 0 && authorList.map((author, i) => {
                            return (
                                <tr key={i} >
                                    <td>{author.name}</td>
                                    <td> <button className='mx-1 btn btn-warning' onClick={()=>toEdit(author._id) } >edit</button> <button className='btn btn-danger' onClick={()=>toDelete(author._id)} >delete</button></td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList
