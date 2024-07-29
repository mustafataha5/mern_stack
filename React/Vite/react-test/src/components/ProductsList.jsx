import React from "react";
import "./style.css" ; 


function ProductList(props){
   

      const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];
      let productlist = products.map((product) => <li key={product.id}> {product.title} </li>)

      return (
        <ul className="mylist">
            {productlist}
        </ul>
      )
}

export default ProductList ; 