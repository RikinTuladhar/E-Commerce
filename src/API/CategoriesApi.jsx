import axios from "axios";
import React from "react";

const CategoriesApi = () => {
  const base = "https://e-commerce-strv.onrender.com";
  const getCategories = (endpoint) => {
    const url = base + endpoint;
    try {
      const response = axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error while fetching categories " + error);
    }
  };
  const postCategory = (endpoint, data) => {
    const url = base + endpoint;
    try {
      const response = axios.post(url, data);
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error while posting categories " + error);
    }
  };

  return { getCategories, postCategory };
};

export default CategoriesApi;
