import axios from "axios";
import React from "react";

const ResellApi = () => {
  const base = "http://localhost:8080";

  const getResell = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log("Error while fetching resell data" + error);
    }
  };

  const postResell = async (endpoint, data) => {
    try {
      const URL = base + endpoint;
      const response = await axios.post(URL, data);
      const data = await response.data;
      return data;
    } catch (error) {
      confirm("Error while posting resell data" + error.message);
    }
  };
  return { postResell ,getResell };
};

export default ResellApi;
