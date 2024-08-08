import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [product,setProduct] = useState([]) ; 
    const [load,setLoad] = useState(false)
    const {id} = useParams() ; 
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            //console.log(res.data.product[0]);
            setProduct(res.data.product[0])
            setLoad(true)
        })
        .catch(err => {
            //console.log(">>>>>>"+id);
            console.log(err)});

    },[])
  return (
    <div >
      {load ? <div> <p> Title: {product.title} </p>
      <p> Price: {product.price} </p>
      <p> Description: {product.description} </p>
    </div>:"Loading"   }
    <Link to="/products" >Go TO Home</Link>
    </div>
  )
}

export default ProductDetails
