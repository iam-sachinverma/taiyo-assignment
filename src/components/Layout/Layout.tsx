import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-white text-base">
      <Header />

      <Sidebar />

      {/* Content */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
