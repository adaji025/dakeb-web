import React from "react";
import { Route, Routes } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
import MobileSidebar from "./MobileSidebar";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = React.useState(true);
  return (
    <>
      <div className="md:hidden">
        {mobileNav && <MobileSidebar {...{ openMobileNav }} />}
      </div>
      <div className="flex bg-[#EBFDFF]">
        <div className="fixed hidden md:block md:w-[250px] overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className=" fixed z-50 w-full bg-white md:ml-[250px] md:w-[calc(100vw-250px)]">
            <Header />
          </div>
          <div>
            <main className="w-full bg-white pt-[80px] md:ml-[250px] md:w-[calc(100vw-250px)]">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedInContainer;
