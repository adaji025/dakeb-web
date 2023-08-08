import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AddUser from "../Users/AddUser";
import AddHunter from "../BeafChickHunters/AddHunter";
import AddReport from "../Outsourcing/AddReport";
import AddBarcode from "../Barcode/AddBarcode";
import CreateRole from "../Management/CreateRole";
import { BsArrowLeft } from "react-icons/bs";
import Comfirmation from "../Forms/Comfirmation";
import CreateDepartment from "../Management/CreateDepartment";

type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ openMobileNav }) => {
  const [addUser, setAddUser] = useState<boolean>(false);
  const [addHunter, setAddHunter] = useState<boolean>(false);
  const [addOutsource, setAddOutsource] = useState<boolean>(false);
  const [addBarcode, setActiveBarcode] = useState<boolean>(false);
  const [createRoles, setCreateRoles] = useState<boolean>(false);
  const [createForm, setCreateForm] = useState<boolean>(false)
  const [createDepartments, setCreateDepartments] = useState<boolean>(false)

  const history = useLocation();
  const navigate = useNavigate();

  const currentRoute = history.pathname;

  const handlePlusClick = () => {
    history.pathname === "/users" && setAddUser(true);
    history.pathname === "/beef-and-chick-hunters" && setAddHunter(true);
    history.pathname === "/out-sourcing" && setAddOutsource(true);
    history.pathname === "/maintenance-chart" && setAddOutsource(true);
    history.pathname === "/barcode-develoment" && setActiveBarcode(true);
    history.pathname === "/system-setup" && setCreateRoles(true);
    history.pathname === "/system-setup/reports" && setCreateRoles(true);
    history.pathname === "/system-setup/forms" && setCreateRoles(true);
    history.pathname === "/system-setup/positions" && setCreateRoles(true);
    history.pathname === "/system-setup/departments" && setCreateDepartments(true);
    history.pathname === "/reports" && navigate("/reports/create-report");
    history.pathname === "/forms" && setCreateForm(true);
  };

  const pageTitle =
    history.pathname === "/"
      ? "Dashboard"
      : history.pathname === "/users"
      ? "Users Management"
      : currentRoute === "/users/user-details"
      ? "User Details"
      : history.pathname === "/reports"
      ? "Reports"
      : history.pathname === "/forms"
      ? "Forms"
      : currentRoute === "/pay-slip"
      ? "Pay Slip"
      : currentRoute === `/pay-slip/`
      ? "Pay slip Details"
      : currentRoute === "/beef-and-chick-hunters"
      ? "Beef and chick hunters"
      : currentRoute.slice(1);

  return (
    <>
      <AddUser opened={addUser} close={() => setAddUser(false)} />
      <AddHunter opened={addHunter} close={() => setAddHunter(false)} />
      <AddReport opened={addOutsource} close={() => setAddOutsource(false)} />
      <AddBarcode opened={addBarcode} close={() => setActiveBarcode(false)} />
      <CreateRole opened={createRoles} close={() => setCreateRoles(false)} />
      <CreateDepartment opened={createDepartments} close={() => setCreateRoles(false)} />
      <Comfirmation opened={createForm} close={() => setCreateForm(false)}  />

   
      <div className="h-[100px] w-full flex justify-between items-center border-b px-4 lg:px-10">
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer md:hidden"
            onClick={() => openMobileNav(true)}
          >
            <FaBars color="#157145" size={24} />
          </div>
          <div className="flex items-center gap-2">
            <div className="cursor-pointer sm:text-2xl" onClick={() => navigate(-1)}>
              <BsArrowLeft />
            </div>
            <h2 className="sm:text-lg font-semibold capitalize">{pageTitle}</h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <IoIosNotificationsOutline color="#4F4F4F" size={30} />
            <div className="absolute h-2 w-2 rounded-full bg-dakeb-red top-1 right-1" />
          </div>

          {(currentRoute === "/users" ||
            currentRoute === "/reports" ||
            currentRoute === "/forms" ||
            currentRoute === "/beef-and-chick-hunters" ||
            currentRoute === "/out-sourcing" ||
            currentRoute === "/maintenance-chart" ||
            currentRoute === "/barcode-develoment" ||
            currentRoute === "/system-setup" ||
            currentRoute === "/system-setup/roles" ||
            currentRoute === "/system-setup/positions" ||
            currentRoute === "/system-setup/forms" ||
            currentRoute === "/system-setup/departments" ||
            currentRoute === "/system-setup/reports") && (
            <div
              className="h-[40px] w-[40px] rounded-full bg-dakeb-green-dark flex justify-center items-center cursor-pointer"
              onClick={handlePlusClick}
            >
              <AiOutlinePlus color="white" />
            </div>
          )}
          <div className="cursor-pointer" onClick={() => navigate("/settings")}>
            <FiSettings color="#4F4F4F" size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
