import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import "../assets/css/home.css";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Outlet />
    </div>
  );
};

export default Layout;
