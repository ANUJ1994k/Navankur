const API_BASE_URL = "https://navankur.onrender.com/api/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch("https://navankur.onrender.com/api/products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Ensure error is properly propagated
  }
};


const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return response.json();
};

export default {fetchProducts, fetchProductById};