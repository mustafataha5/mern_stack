import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [product,setProduct] = useState([]) ; 
    const [load,setLoad] = useState(false)
    const {id} = useParams() ; 
    const nav = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            //console.log(res.data.product[0]);
            setProduct(res.data.product)
            setLoad(true)
        })
        .catch(err => {
            //console.log(">>>>>>"+id);
            console.log(err)});

    },[])

    const removeProduct=()=>{
        axios.delete("http://localhost:8000/api/products/"+id)
        .then(res => {
            //console.log(res.data.product[0]);
            nav("/products") ;
        })
        .catch(err => {
            //console.log(">>>>>>"+id);
            console.log(err)});
    }
  return (
    <div >
      {load ? <div className='my-5'> <p> Title: {product.title} </p>
      <p> Price: {product.price} </p>
      <p> Description: {product.description} </p>
      <Link className='btn btn-outline-primary' to={"/products/"+product._id+"/edit"}>Edit</Link>
      <button className='btn btn-outline-danger mx-2' onClick={removeProduct}> Delete</button>
    </div>:"Loading"   }
    
    <Link  to="/products" >Go TO Home</Link>
    </div>
  )
}

export default ProductDetails
