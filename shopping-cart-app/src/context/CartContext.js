import { createContext, useContext, useState } from "react";

// ✅ Create Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Define addToCart function
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      // Check if product is already in the cart, if yes, increase quantity
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity if already in cart
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }]; // Add product with quantity 1 if not in cart
      }
    });
    console.log("Added to cart:", product);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Export CartContext hook
export const useCart = () => useContext(CartContext);
