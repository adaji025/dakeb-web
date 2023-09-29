import React, { useEffect, useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import UserTable from "../../components/Users/UserTable";
import useNotification from "../../hooks/useNotification";
import { getUsers } from "../../services/Users/users";
import { UserType } from "../../types/user";
import Layout from "../../components/LoggedIn/Layout";
import AddUser from "../../components/Users/AddUser";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = React.useState<"administrator" | "staff">(
    "administrator"
  );
  const [users, setUsers] = React.useState<UserType[]>([]);
  const [addUser, setAddUser] = useState<boolean>(false);
 

  const { handleError } = useNotification();

  const addminUsers = users.filter((user) => user.role.name === "Admin");
  const staffUsers = users.filter((user) => user.role.name === "User");

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = () => {
    setLoading(true);
    getUsers()
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };



  return (
    <>
      <AddUser opened={addUser} close={() => setAddUser(false)} setUsers={setUsers} />

      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Layout title="User" handleBtnClick={() => setAddUser(true)}>
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
            <UserTable
              data={active === "administrator" ? addminUsers : staffUsers}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Users;
