import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {
  return (
    <div >
    <h2>All Products:</h2>
    <div >
        {products.map((product,i)=>{
            return(
                <div>

                    <Link to={"/products/"+product._id}>{product.title}</Link>
                </div>
               
            );
        } ) }
    </div>
    </div>
  )
}

export default ProductList
