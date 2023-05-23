import { Box, PasswordInput } from "@mantine/core";
import { BsArrowLeft } from "react-icons/bs";
import Logo from "../../../assets/svgs/dakeb-logo.svg";
import styles from "../Auth.module.css";
import { useNavigate } from "react-router";
import React from "react";

const NewPassword = () => {
  const [pwChanged, setPwChanged] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className={`pt-[88px] ${styles.container}`}>
      <div className="max-w-[652px] min-h-[382px] mx-auto bg-white flex flex-col items-center justify-between pb-3">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="" className="w-[80px] mt-10" />
          <div className="font-medium text-lg text-center text-black-mid">
           {!pwChanged ? "Reset password" : "Password changed"}
          </div>
          <span className="text-center text-black-light block mt-2 text-sm md:max-w-[400px] mx-auto">
           {!pwChanged ? "Kindly enter the email linked to your account" : "Your password has been changed successfully"}
          </span>
          <Box mt={42} sx={{ maxWidth: 380 }} className="w-full">
            {!pwChanged && (
              <>
                <PasswordInput placeholder="Password" size="md" />
                <div className="flex justify-between mt-2 ga-5 text-[10px]">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-1">
                      <div
                        className={`h-[5px] w-[5px] bg-black rounded-full`}
                      />{" "}
                      Has at least 8 characters.
                    </div>
                    <div className="flex items-center gap-1">
                      <div
                        className={`h-[5px] w-[5px] bg-black rounded-full`}
                      />
                      Use upper and lower case
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-1">
                      <div
                        className={`h-[5px] w-[5px] bg-black rounded-full`}
                      />{" "}
                      Use upper and lower case
                    </div>
                    <div className="flex items-center gap-1">
                      <div
                        className={`h-[5px] w-[5px] bg-black rounded-full`}
                      />
                      Contains a number
                    </div>
                  </div>
                </div>
                <PasswordInput
                  placeholder="Confirm password"
                  size="md"
                  mt={20}
                />
              </>
            )}
            <button
              className="mt-10 h-[52px] w-full bg-dakeb-green-mid text-white font-medium text-base rounded-[5px]"
              onClick={() => setPwChanged(!pwChanged)}
            >
              {!pwChanged ? "Change password" : "Back to log in"}
            </button>

           {!pwChanged && <div
              className="mt-8 flex items-center justify-center gap-3 cursor-pointer font-medium"
              onClick={() => navigate("/login")}
            >
              <BsArrowLeft size={24} />
              <span>Back to log in</span>
            </div>}
          </Box>
        </div>
        <div className="mt-10 text-dakeb-black-light">
          &copy; Dakeb 2023 | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
