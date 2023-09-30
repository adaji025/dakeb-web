import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AddBarcode from "../Barcode/AddBarcode";
import CreateRole from "../Management/CreateRole";
import { BsArrowLeft } from "react-icons/bs";
import Comfirmation from "../Forms/Comfirmation";
import CreateDepartment from "../Management/CreateDepartment";

type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  handleBtnClick?: () => void;
};

const Header: React.FC<Props> = ({ openMobileNav, title, handleBtnClick }) => {
  const [addBarcode, setActiveBarcode] = useState<boolean>(false);
  const [createRoles, setCreateRoles] = useState<boolean>(false);
  const [createForm, setCreateForm] = useState<boolean>(false);
  const [createDepartments, setCreateDepartments] = useState<boolean>(false);

  const history = useLocation();
  const navigate = useNavigate();

  const currentRoute = history.pathname;

  return (
    <>
      
      <AddBarcode opened={addBarcode} close={() => setActiveBarcode(false)} />
      <CreateRole opened={createRoles} close={() => setCreateRoles(false)} />
      <CreateDepartment
        opened={createDepartments}
        close={() => setCreateDepartments(false)}
      />
      <Comfirmation opened={createForm} close={() => setCreateForm(false)} />

      <div className="h-[100px] w-full flex justify-between items-center border-b px-4 lg:px-10">
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer md:hidden"
            onClick={() => openMobileNav(true)}
          >
            <FaBars color="#157145" size={24} />
          </div>
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer sm:text-2xl"
              onClick={() => navigate(-1)}
            >
              <BsArrowLeft />
            </div>
            <h2 className="sm:text-lg font-semibold capitalize">{title}</h2>
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
              onClick={handleBtnClick}
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
