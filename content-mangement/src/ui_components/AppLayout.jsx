import React from "react";
import { Navbar } from "./Navbar";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
      <Navbar />
      <Outlet />
      <Footer/>
    </main>
  );
};

export default AppLayout;
