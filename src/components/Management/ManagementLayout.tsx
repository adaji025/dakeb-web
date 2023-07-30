import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const ManagementLayout: React.FC<Props> = ({ children }) => {

  const navigate = useNavigate();
  const history = useLocation();

  return (
    <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
      <div className="flex gap-5">

        <div
          className={`text-base font-medium cursor-pointer ${
            history.pathname === `/system-setup`
              ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
              : "text-[#828282]"
          } `}
          onClick={() => navigate("/system-setup")}
        >
          Roles
        </div>
        <div
          className={`text-base font-medium cursor-pointer ${
            history.pathname === `/system-setup/positions`
              ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
              : "text-[#828282]"
          } `}
          onClick={() => navigate("/system-setup/positions")}
        >
          Position
        </div>
        <div
          className={`text-base font-medium cursor-pointer ${
            history.pathname === `/system-setup/reports`
              ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
              : "text-[#828282]"
          } `}
          onClick={() => navigate("/system-setup/reports")}
        >
          Reports
        </div>
        <div
          className={`text-base font-medium cursor-pointer ${
            history.pathname === `/system-setup/forms`
              ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
              : "text-[#828282]"
          } `}
          onClick={() => navigate("/system-setup/forms")}
        >
          Forms
        </div>
        <div
          className={`text-base font-medium cursor-pointer ${
            history.pathname === `/system-setup/departments`
              ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
              : "text-[#828282]"
          } `}
          onClick={() => navigate("/system-setup/departments")}
        >
          Department
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ManagementLayout;
