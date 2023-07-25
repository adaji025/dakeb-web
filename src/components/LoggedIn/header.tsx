import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AddUser from "../Users/AddUser";
import { DataContext } from "../../context/DataProvider";
import AddHunter from "../BeafChickHunters/AddHunter";
import AddReport from "../Outsourcing/AddReport";

type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ openMobileNav }) => {
  const [addUser, setAddUser] = useState<boolean>(false);
  const [addHunter, setAddHunter] = useState<boolean>(false);
  const [addOutsource, setAddOutsource] = useState<boolean>(false);

  const { createReport } = React.useContext(DataContext);
  const history = useLocation();
  const navigate = useNavigate()

  const currentRoute = history.pathname;

  const handlePlusClick = () => {
    history.pathname === "/users" && setAddUser(true);
    history.pathname === "/beef-and-chick-hunters" && setAddHunter(true);
    history.pathname === "/out-sourcing" && setAddOutsource(true);
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
      <AddUser opened={addUser} close={() => setAddUser(false)} />
      <AddHunter opened={addHunter} close={() => setAddHunter(false)} />
      <AddReport opened={addOutsource} close={() => setAddOutsource(false)} />
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

          {(currentRoute === "/users" || currentRoute === "/reports" || currentRoute === "/forms" || currentRoute === "/beef-and-chick-hunters" || currentRoute === "/out-sourcing") &&
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
