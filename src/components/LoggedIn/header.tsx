import { useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AddUser from "../Users/AddUser";
import React from "react";
import { DataContext } from "../../context/DataProvider";

type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ openMobileNav }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const { createReport } = React.useContext(DataContext);
  const history = useLocation();
  const navigate = useNavigate()

  const currentRoute = history.pathname;

  const handlePlusClick = () => {
    history.pathname === "/users" && open();
    history.pathname === "/reports" && navigate("/reports/create-report");
    history.pathname === "/forms" && navigate("/reports/create-report");
  };

  const pageTitle =
    history.pathname === "/"
      ? "Dashboard"
      : history.pathname === "/users"
      ? "Users Management"
      : history.pathname === "/reports"
      ? "Reports"
      : history.pathname === "/forms";

  return (
    <>
      <AddUser {...{ close, opened }} />
      <div className="h-[100px] w-full flex justify-between items-center border-b px-4 lg:px-10">
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer md:hidden"
            onClick={() => openMobileNav(true)}
          >
            <FaBars color="#157145" size={24} />
          </div>
          <h2 className="text-lg font-semibold">{pageTitle}</h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <IoIosNotificationsOutline color="#4F4F4F" size={30} />
            <div className="absolute h-2 w-2 rounded-full bg-dakeb-red top-1 right-1" />
          </div>

          {(currentRoute === "/users" || currentRoute === "/reports" || currentRoute === "/forms") &&
            !createReport && (
              <div
                className="h-[40px] w-[40px] rounded-full bg-dakeb-green-dark flex justify-center items-center cursor-pointer"
                onClick={handlePlusClick}
              >
                <AiOutlinePlus color="white" />
              </div>
            )}

          <FiSettings color="#4F4F4F" size={24} />
        </div>
      </div>
    </>
  );
};

export default Header;
