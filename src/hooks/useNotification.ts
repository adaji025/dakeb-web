import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";


const useNotification = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    showNotification({
      title: "User logged out",
      message: `${"Login in to continue "} 😑`,
      color: "yellow",
    });
    localStorage.removeItem("token");
    navigate("/login");
  };

 
  
  const handleError = (error: any) => {
    if (!error.response) {
      return showNotification({
        title: "Network Error",
        message: "Please check your connection",
        color: "red",
      });
    }

    if (error?.response?.status === 401) {
      return logoutUser();
    }

    if (error?.response?.status === 500) {
      return showNotification({
        title: "Error",
        message: `${
          error?.response?.data?.message ?? "An error occured, please try again"
        } 🤥`,
        color: "red",
      });
    }

    if (typeof error?.response?.data?.errors === "object" && error !== null) {
      // eslint-disable-next-line
      for (const [_, value] of Object?.entries(error?.response?.data?.errors)) {
        showNotification({
          message: `${value}`,
          color: "red",
        });
      }
    } else {
      showNotification({
        title: "Error",
        message: `${error?.response?.data?.message} 🤥`,
        color: "red",
      });
    }
  };
  return {
    handleError,
    logoutUser,
  };
};

export default useNotification;
