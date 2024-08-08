import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'
import ProductList from '../components/ProductList'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const [products,setProducts] = useState([]) 
    const [load,setLoad] = useState(false)
    const navgiate = useNavigate() ; 
   
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data.products); 
            setProducts(res.data.products);
            setLoad(true);
            
        })
        .catch(err => console.log(err)) ; 
    },[])

    const addProduct = (newProduct) => {
        setProducts([...products,newProduct]) ; 
    }
    const removeProduct = (id) => {
        setProducts(products.filter(product => product._id!=id)) ; 
    }

  return (
    <div>
      <ProductForm addProduct={addProduct}/>
      {load &&  <ProductList products={products}  remove={removeProduct}/>}
    </div>
  )
}

export default Main
