import axios from "axios";
import React from "react";

const ProductApi = () => {
  const base = "http://localhost:8080";

  const getProduct = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error while fetching product data" + error);
    }
  }

  const postProduct = async (endpoint,data) => {
    const url = base + endpoint;
    try {
      const response = await axios.post(url,data);
      const data = await response.data;
      return data;
    } catch (error) {
      console("Error while posting product" + error.message);
    }
  };


  return {getProduct,postProduct};
};

export default ProductApi;
