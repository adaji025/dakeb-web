import React, { useEffect, useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import AdminStaffTable from "../../components/Dashboard/AdminTable";
import { getUsers } from "../../services/Users/users";

const datas = [
  {
    id: 1,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    id: 2,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    id: 4,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
  {
    id: 3,
    name: "Cooper Lubin",
    email: "dulcesanton@gmail.com",
    phone_number: "08156431267",
    role: "Sales manager",
    salary: 250000,
    date_joined: "06 - 06 - 2010",
  },
];

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = React.useState<"administrator" | "staff">(
    "administrator"
  );
  const [users, setUsers] = React.useState([]);

  console.log("users", users);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = () => {
    setLoading(true);
    getUsers()
      .then((res: any) => {
        setUsers(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
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
        <div className="mt-5 overflow-auto">
          <AdminStaffTable data={datas} />
        </div>
      </div>
    </>
  );
};

export default Users;
