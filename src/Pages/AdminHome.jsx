import React, { useState } from "react";
import AdminNav from "../Components/AdminNav";
import { Outlet } from "react-router-dom";
import AdminFooter from "../Components/AdminFooter";

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
