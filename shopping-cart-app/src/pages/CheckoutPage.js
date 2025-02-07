import axios from "axios";
import React from "react";


const Checkout = ({ cart, user }) => {
  const handlePurchase = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/purchase", {
        user,
        cart,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Purchase failed");
    }
  };

  return <button onClick={handlePurchase}>Buy Now</button>;
};

export default Checkout;
