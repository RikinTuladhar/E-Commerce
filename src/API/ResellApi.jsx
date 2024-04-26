import axios from "axios";
import React from "react";

// A custom hook for interacting with the Resell API
const ResellApi = () => {
  // The base URL for the Resell API
  const base = "https://e-com-7w8l.onrender.com";

  // A function to fetch data from the Resell API
  // @param {string} endpoint - The endpoint to fetch data from
  // @returns {Promise} - A promise that resolves to the data returned from the API
  const getResell = async (endpoint) => {
    try {
      // Use axios to make a GET request to the specified endpoint
      const response = await axios.get(endpoint);
      // Extract the data from the response
      const data = await response.data;
      // Return the data
      return data;
    } catch (error) {
      // Log any errors that occur during the request
      console.log("Error while fetching resell data" + error);
    }
  };

  // A function to post data to the Resell API
  // @param {string} endpoint - The endpoint to post data to
  // @param {Object} data - The data to post to the API
  // @returns {Promise} - A promise that resolves to the data returned from the API
  const postResell = async (endpoint, data) => {
    try {
      // Construct the URL for the POST request
      const URL = base + endpoint;
      // Use axios to make a POST request to the specified endpoint with the provided data
      const response = await axios.post(URL, data);
      // Extract the data from the response
      const data = await response.data;
      // Return the data
      return data;
    } catch (error) {
      // Display an error message if there is an issue with the POST request
      confirm("Error while posting resell data" + error.message);
    }
  };

  // Return an object containing the getResell and postResell functions
  return { postResell, getResell };
};

// Export the ResellApi custom hook
export default ResellApi;
