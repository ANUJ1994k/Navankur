import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProductList.css'

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
    <h2>Products</h2>
    <div className="main">
            {products.map((product) => (
        <div key={product.id} className="card">
          <h3>Name: {product.title}</h3>
          <h3> Price: {product.name} ${product.price}</h3>
          <p>Description: {product.description}</p>
          
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
