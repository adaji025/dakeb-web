import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/svgs/dakeb-logo-light.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar: React.FC<Props> = ({ openMobileNav }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="fixed bg-black/10 z-[1000] h-screen w-full">
      <div onClick={() => openMobileNav(false)}>
        <FaTimes
          size={24}
          color="#002500"
          className="absolute top-5 right-5 cursor-pointer"
        />
      </div>
      <div className="bg-dakeb-green-dark w-4/5 absolute top-0 h-screen overflow-auto">
        <div className="mt-3 text-white">
          <ul
            className={`mt-3 grid gap-1 xs:gap-3 text-sm xs:text-base font-medium  transition-all duration-500 `}
          >
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer`}
              onClick={() => {
                navigate("/");
                openMobileNav(false);
              }}
            >
              Dashboard
            </li>

            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/users");
                openMobileNav(false);
              }}
            >
              Users
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/reports");
                openMobileNav(false);
              }}
            >
              Reports
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/forms");
                openMobileNav(false);
              }}
            >
              Forms
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/pay-slip");
                openMobileNav(false);
              }}
            >
              Pay slip~
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/beef-and-chick-hunters");
                openMobileNav(false);
              }}
            >
              Beef and chick hunters
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/out-sourcing");
                openMobileNav(false);
              }}
            >
              Out sourcing
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/maintenance-chart");
                openMobileNav(false);
              }}
            >
              Maintenance chart
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/barcode-develoment");
                openMobileNav(false);
              }}
            >
              Barcode development
            </li>
            <li
              className={`flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={() => {
                navigate("/system-setup");
                openMobileNav(false);
              }}
            >
              System set-up
            </li>
            <li
              className={`mt-5 flex items-center  p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}
              onClick={logout}
            >
              Logout
            </li>
            <li
              className={`flex gap-3 items-center pl-3 pt-3 pb-6 cursor-pointer`}
              onClick={() => {
                navigate("/");
                openMobileNav(false);
              }}
            >
              <img src={Logo} alt="" className="w-[50px]" />
              <span>Dakeb Farms.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
