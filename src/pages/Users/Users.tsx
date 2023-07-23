import React from "react";
import { UserTable } from "../../components/Users/UserTable";
import { columns } from "../../components/Dashboard/AdminTable/Column";

const users = [
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
];

const Users = () => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [active, setActive] = React.useState<"administrator" | "staff">(
    "administrator"
  );
  const [tableId] = React.useState<string>("");

  return (
    <>
      <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
        <div className="flex gap-5">
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "administrator"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("administrator")}
          >
            Administrator
          </div>
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "staff"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("staff")}
          >
            Staff
          </div>
        </div>
        <div className="mt-5">
          <UserTable
            data={users}
            {...{ columns, tableId, setRowSelection, state: { rowSelection } }}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
