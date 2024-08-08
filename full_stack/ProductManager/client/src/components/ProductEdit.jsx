import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
    const [title,setTitle]= useState('') ; 
    const [price,setPrice] = useState(0) ; 
    const [description,setDesc] = useState('') ;
    const {id} = useParams() ; 
    const navigate = useNavigate() ;  
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            //console.log(res.data.product[0]);
            setTitle(res.data.product.title);
           setPrice(res.data.product.price);
           setDesc(res.data.product.description);
        })
        .catch(err => {
            //console.log(">>>>>>"+id);
            console.log(err)});

    },[])

    const handleSubmit = (e)=>{
        e.preventDefault() ;

         axios.patch("http://localhost:8000/api/products/"+id,{title,price,description})
         .then(res => {
            console.log(res.data) ; 
            navigate("/products/"+id);
         })
         .catch(err => console.log(err)) ; 

    }

  return (
    <div className='my-5 d-flex justify-content-center'>
        <form  onSubmit={handleSubmit}>
            <table className='table'>
                <tbody>
                    <tr> 
                        <td> <label htmlFor="">Title:</label></td>
                        <td> <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> </td>
                    </tr>
                    <tr> 
                        <td> <label htmlFor="">Price:</label></td>
                        <td> <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /> </td>
                    </tr>
                    <tr> 
                        <td> <label htmlFor="">Description:</label></td>
                        <td> <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} /> </td>
                    </tr>
                    <tr> 
                        <td> </td>
                        <td className='text-start' > <input className='btn btn-outline-primary' type="submit" value="Edit" /> </td>
                    </tr>
                </tbody>
            </table>
        </form>

     
    </div>
  )
}

export default ProductEdit
