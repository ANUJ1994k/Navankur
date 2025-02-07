import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Import useCart hook

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  if (!addToCart) {
    console.error("addToCart function is undefined!");
    return null;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Pass the entire product */}
    </div>
  );
};

export default ProductCard;
