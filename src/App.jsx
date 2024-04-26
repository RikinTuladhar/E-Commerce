import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Models/Home";
import HomePage from "./Pages/HomePage";
import Checkout from "./Components/Checkout"; // Import the Checkout component
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import ProductPage from "./Pages/ProductPage";
import ResellPage from "./Pages/ResellPage";
import AdminProduct from "./Pages/Admin/AdminProduct";
import AdminHome from "./Pages/Admin/AdminHome";
import Admin from "./Models/Admin";
import CategoriesContainer from "./Models/CategoriesContainer";
import ProductDescription from "./Pages/ProductDescription";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/checkout", // Define route for checkout
          element: <Checkout />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/categories",
          element: <CategoriesContainer />,
        },
        {
          path: "/resells",
          element: <ResellPage />,
        },
        // Define route for product description
        {
          path: "/products/:id", // Define route with a parameter :id
          element: <ProductDescription />, // Render the ProductDescription component
        },
      ],
    },

    ,
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/admin",
      element: <AdminHome />,
      children: [
        {
          path: "/admin", // Changed from "/admin" to "/"
          element: <Admin />, // Assuming this is the default route under "/admin"
          index: true,
        },
        {
          path: "/admin/addProduct", // Relative path to the parent route
          element: <AdminProduct />,
        },
        {
          path: "/admin/", // Relative path to the parent route
          element: <AdminProduct />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
