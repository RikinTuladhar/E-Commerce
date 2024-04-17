import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Models/Home';
import HomePage from './Pages/HomePage';
import Checkout from './Components/Checkout'; // Import the Checkout component

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/checkout", // Define route for checkout
          element: <Checkout />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
