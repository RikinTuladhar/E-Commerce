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
  
  const postProduct = async (endpoint,data) =>{
    let url = `${base}${endpoint}`;
    console.log(url);
    console.log(data);
    // console.log(url);
    try
    {
      let response = await axios.post(url,data);
      const postdata = await response.data;
      console.log(postdata);
      return postdata;
    }catch(ex){
      return ex;
    }
  

  }


  return { getProduct, postProduct };
};

export default ProductApi;
