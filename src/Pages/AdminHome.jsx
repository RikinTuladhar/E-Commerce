import React from "react";
import AdminNav from "../Components/AdminNav";
import { Outlet } from "react-router-dom";
import AdminFooter from "../Components/AdminFooter";
import { useState } from "react";

const AdminHome = () => {
  const [reload, setReload] = useState(false);
  return (
    <>
      <AdminNav />
      <Outlet context={{ reload, setReload }} />
      <AdminFooter />
    </>
  );
};

export default AdminHome;
