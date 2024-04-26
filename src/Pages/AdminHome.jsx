import React from "react";
import AdminNav from "../Components/AdminNav";
import { Outlet } from "react-router-dom";
import AdminFooter from "../Components/AdminFooter";

const AdminHome = () => {
  return (
    <>
      <AdminNav />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminHome;
