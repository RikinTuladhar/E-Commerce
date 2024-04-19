import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Models/Home';
import HomePage from './Pages/HomePage';
import Checkout from './Components/Checkout'; // Import the Checkout component
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
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
        },
        {
          path: "/login",
          element:<SignIn/>
        },
        {
          path: "/register",
          element:<SignUp/>
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
