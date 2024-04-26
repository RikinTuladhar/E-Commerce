import axios from "axios";
import React from "react";

const ProductApi = () => {
  const base = "https://e-com-7w8l.onrender.com";

  const getProduct = async (endpoint) => {
    const url = base + endpoint;
    console.log(url);
    try {
      const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error while fetching product data" + error);
    }
  };

  const postProduct = async (endpoint, data) => {
    const url = base + endpoint;
    try {
      const response = await axios.post(url, data);
      const data = await response.data;
      return data;
    } catch (error) {
      console("Error while posting product" + error.message);
    }
  };

  return { getProduct, postProduct };
};

export default ProductApi;
