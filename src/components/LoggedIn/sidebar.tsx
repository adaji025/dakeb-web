import { Avatar } from "@mantine/core";
import React from "react";
import { BsCamera } from "react-icons/bs";
import Logo from "../../assets/svgs/dakeb-logo-light.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  menuItem: Array<{
    title: string;
    url: string;
  }>;
};

const Sidebar = ({ menuItem }: Props) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [image, setImage] = React.useState(Array<Blob>);
  const [imagePreview, setImagePreview] = React.useState("");

  const navigate = useNavigate();

  const uploadRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (image.length) {
      setImagePreview(URL.createObjectURL(image[0]));
    }
  }, [image]);

  const ChangeProfilePictureHandle = (e: any) => {
    if (e.target.files.length) {
      setImagePreview(e.target.files[0]);
    }
    setImage(e.target.files);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="h-screen hidden md:flex md:w-[200px] lg:w-[250px]  bg-dakeb-green-dark">
      <div className="flex flex-col w-full overflow-y-auto sidebar">
        <div className="flex flex-col mx-auto justify-center mt-5 relative">
          <div
            className={`relative max-w-[100px] mx-auto`}
            onMouseOver={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            <Avatar
              src={imagePreview}
              alt="Profile Picture"
              color="red"
              size={100}
              radius={50}
            >
              VR
            </Avatar>
            <div
              className={`absolute top-0 left-0 w-[100px] rounded-full h-[100px] bg-black/50 mx-auto  flex-col justify-center items-center  ${
                showOverlay ? "flex" : "hidden"
              }`}
            >
              <BsCamera
                className="cursor-pointer"
                onClick={() => uploadRef.current?.click()}
              />
              <span
                className="cursor-pointer font-bold"
                onClick={() => uploadRef.current?.click()}
              >
                Change
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="mt-2 font-medium text-white text-start">
              Brandon Franci
            </h2>
            <div className={`h-2 w-2 rounded-full bg-dakeb-yellow-mid mt-2`} />
          </div>
          <p className="text-[#F2F2F2] text-start text-sm mt-2">
            Sales Manager
          </p>
        </div>
        <hr className="mt-2" />
        <div className="mt-3 text-white">
          <ul
            className={`mt-3 grid gap-1 xs:gap-3 text-sm xs:text-base font-medium  transition-all duration-500 `}
          >
            {menuItem.map((menu, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 p-3 hover:bg-dakeb-yellow-mid/10  hover:border-r-4 border-dakeb-yellow-mid cursor-pointer ${
                  location.pathname === menu.url
                    ? "border-r-4 border-dakeb-yellow-mid bg-dakeb-yellow-mid/10"
                    : ""
                }`}
                onClick={() => navigate(`${menu.url}`)}
              >
                {menu.title}
              </li>
            ))}
          </ul>
          <hr />
          <ul
            className={`mt-10 grid gap-1 xs:gap-3 text-sm xs:text-base font-medium`}
          >
            <li
              className={`flex items-center pl-3  py-3 bg-dakeb-yellow-mid/10 cursor-pointer border-r-4 border-dakeb-yellow-mid `}
              onClick={logout}
            >
              Log out
            </li>
            <li
              className={`flex gap-3 items-center pl-3 pt-3 pb-6 cursor-pointer`}
            >
              <img src={Logo} alt="" className="w-[50px]" />
              <span>Dakeb Farms.</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Profile Picture */}
      <input
        type="file"
        className="hidden"
        ref={uploadRef}
        onChange={(e) => ChangeProfilePictureHandle(e)}
      />
    </aside>
  );
};

export default Sidebar;
