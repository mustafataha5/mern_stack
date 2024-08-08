import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({products,remove}) => {

    const removeProduct=(id)=>{
        axios.delete("http://localhost:8000/api/products/"+id)
        .then(res => {
            console.log(res.data.product);
            remove(res.data.product._id);
            
        })
        .catch(err => {
            //console.log(">>>>>>"+id);
            console.log(err)});

            
    }


  return (
    <div >
    <h2>All Products:</h2>
    <div >
        {products.map((product,i)=>{
            return(
                <div key={i} className='my-2 d-flex justify-content-center' >
                  <h4> <Link to={"/products/"+product._id}>{product.title}</Link> </h4> 
                    <button onClick={()=>removeProduct(product._id)} className='mx-2 btn btn-outline-danger btn-sm' > delete</button>
                </div>
               
            );
        } ) }
    </div>
    </div>
  )
}

export default ProductList
