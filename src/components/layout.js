import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <hr />
      <div
        className="mx-auto p-10"
        style={{
          maxWidth: "80rem",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
