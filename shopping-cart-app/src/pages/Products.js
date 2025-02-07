import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/api"; 
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((error) => console.error("Error fetching products:", error)); 
  }, []);

  return <ProductList products={products} />;
};

export default Products;
