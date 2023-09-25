import { getUsers } from "../services/Users/users";

const useUser = () => {
  const handleGetUsers = () => {
    getUsers()
      .then((res: any) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  };

  return { handleGetUsers };
};

export default useUser;
