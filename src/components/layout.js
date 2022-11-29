import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
