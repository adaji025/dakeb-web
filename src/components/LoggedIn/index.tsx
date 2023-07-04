import React from "react";
import { Route, Routes } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
import MobileSidebar from "./MobileSidebar";
import StaffDashboard from "../../pages/Dashboard/StaffDashboard";
import Users from "../../pages/Users/Users";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = React.useState(false);

  const menuItem = [
    {
      title: "Dasboard",
      url: "/",
    },
    {
      title: "Users",
      url: "/users",
    },
    {
      title: "Forms",
      url: "/forms",
    },
    {
      title: "Pay Slip",
      url: "/pay-slip",
    },
    {
      title: "Beef and Chicken",
      url: "/beef-and-chicken",
    },
    {
      title: "Out Sourcing",
      url: "/out-sourcing",
    },
    {
      title: "Maintenance Chart",
      url: "/maintenance-chart",
    },
    {
      title: "Barcode Development",
      url: "/barcode-develoment",
    },
    {
      title: "System Setup",
      url: "/system-setup",
    },
  ];

  return (
    <>
      <div className="md:hidden">
        {mobileNav && <MobileSidebar {...{ openMobileNav }} />}
      </div>
      <div className="flex bg-[#EBFDFF] overflow-x-hidden">
        <div className="fixed hidden md:block md:w-[250px]">
          <Sidebar {...{ menuItem }} />
        </div>
        <div className="w-full">
          <div className="fixed z-50 w-full bg-white md:ml-[200px] lg:ml-[250px] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)]">
            <Header {...{ openMobileNav }} />
          </div>
          <main className="w-full bg-white pt-[100px] md:ml-[200px] lg:ml-[250px] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)] px-4 lg:px-10">
            <Routes>
              <Route path="/" element={<StaffDashboard />} />
              <Route path="" element={<AdminDashboard />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default LoggedInContainer;
