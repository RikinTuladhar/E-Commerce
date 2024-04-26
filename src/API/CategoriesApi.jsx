import axios from "axios";
import React from "react";

const CategoriesApi = () => {
  const base = "https://e-com-7w8l.onrender.com";
  const getCategories = async (endpoint) => {
    const url = base + endpoint;
    try {
      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error while fetching categories " + error);
    }
  };
  const postCategory = async (endpoint, data) => {
    const url = base + endpoint;
    try {
      const response = await axios.post(url, data);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error while posting categories " + error);
    }
  };

  return { getCategories, postCategory };
};

export default CategoriesApi;
