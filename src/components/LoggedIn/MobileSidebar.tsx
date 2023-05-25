import { FaTimes } from "react-icons/fa";
type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar: React.FC<Props> = ({ openMobileNav }) => {
  return (
    <div className="fixed bg-black/10 z-[1000] h-screen w-full">
      <div onClick={() => openMobileNav(false)}>
        <FaTimes
          size={24}
          color="#002500"
          className="absolute top-5 right-5 cursor-pointer"
        />
      </div>
      <div className="bg-dakeb-green-dark w-4/5 absolute top-0 h-screen">
        <div className="mt-3 text-white">
          <ul
            className={`mt-3 grid gap-1 xs:gap-3 text-sm xs:text-base font-medium  transition-all duration-500 `}
          >
            <li
              className={`flex items-center pl-3  py-3 bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid  cursor-pointer`}
            >
              Menu
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer`}>
              Dashboard
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer`}>
              Notifications
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Users
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Reports
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Forms
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Pay slip~
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Beef and chick hunters
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Out sourcing
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Maintenance chart
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              Barcode development
            </li>
            <li className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer `}>
              System set-up
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
