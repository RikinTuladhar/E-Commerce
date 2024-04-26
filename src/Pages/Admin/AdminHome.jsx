<<<<<<< Updated upstream:src/Pages/AdminHome.jsx
import React, { useState } from "react";
import AdminNav from "../Components/AdminNav";
=======
import React from "react";
import AdminNav from "../../Components/AdminNav";
>>>>>>> Stashed changes:src/Pages/Admin/AdminHome.jsx
import { Outlet } from "react-router-dom";
import AdminFooter from "../../Components/AdminFooter";

const AdminHome = () => {
  const [reload,setReload] = useState(false)
  return (
    <>
      <AdminNav />
      <Outlet context={{reload,setReload}} />
      {/* <AdminFooter /> */}
    </>
  );
};

export default AdminHome;
