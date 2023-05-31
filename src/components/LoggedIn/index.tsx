import React from "react";
import { Route, Routes } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
import MobileSidebar from "./MobileSidebar";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = React.useState(false);
  return (
    <>
      <div className="md:hidden">
        {mobileNav && <MobileSidebar {...{ openMobileNav }} />}
      </div>
      <div className="flex bg-[#EBFDFF] overflow-x-hidden">
        <div className="fixed hidden md:block md:w-[250px]">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="fixed z-50 w-full bg-white md:ml-[200px] lg:ml-[250px] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)]">
            <Header {...{ openMobileNav }} />
          </div>
          <main className="w-full bg-white pt-[100px] md:ml-[200px] lg:ml-[250px] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)] px-4 lg:px-10">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default LoggedInContainer;
