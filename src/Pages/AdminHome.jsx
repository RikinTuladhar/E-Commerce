import React from 'react'
import AdminProduct from './AdminProduct'
import AdminNav from '../Components/AdminNav'
import { Outlet } from 'react-router-dom'

const AdminHome = () => {
  return (
    <>
    <AdminNav/>
    <Outlet/>
    </>
  )
}

export default AdminHome
