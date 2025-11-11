import React, { useEffect } from "react";
import Navbar from "../Components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
//   Persist theme on load (dark/light toggle)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
