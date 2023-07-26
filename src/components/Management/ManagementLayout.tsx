import React from "react";

type Props = {
  children: React.ReactNode;
};

const ManagementLayout: React.FC<Props> = ({ children }) => {
  const [active, setActive] = React.useState<string>("Roles");
  const cat = ["Roles", "Positions", "Reports", "Forms", "Departments"];

  return (
    <div>
      <div className="flex gap-5">
        {cat.map((item) => (
          <div
            className={`text-base font-medium cursor-pointer ${
              active === item
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ManagementLayout;
