import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ openMobileNav }) => {
  return (
    <div className="h-[100px] w-full flex justify-between items-center border-b px-4 lg:px-10">
      <div className="flex items-center gap-2">
        <div
          className="cursor-pointer md:hidden"
          onClick={() => openMobileNav(true)}
        >
          <FaBars color="#157145" size={24} />
        </div>
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <IoIosNotificationsOutline color="#4F4F4F" size={30} />
          <div className="absolute h-2 w-2 rounded-full bg-dakeb-red top-1 right-1" />
        </div>

        <FiSettings color="#4F4F4F" size={24} />
      </div>
    </div>
  );
};

export default Header;
