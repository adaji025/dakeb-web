import React from "react";
import { Box, TextInput } from "@mantine/core";
import { BsArrowLeft } from "react-icons/bs";
import styles from "../Auth.module.css";
import Logo from "../../../assets/svgs/dakeb-logo.svg";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const [inputPw, setInputPw] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className={`pt-[88px] ${styles.container}`}>
      <div className="max-w-[652px] h-[514px] mx-auto bg-white flex flex-col items-center justify-between pb-3">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="" className="w-[80px] mt-10" />
          <div className="font-medium text-lg text-center text-black-mid">
            {!inputPw ? "Reset password" : "Kindly check your e-mail"}
          </div>
          <span className="text-center text-black-light block mt-2 text-sm md:max-w-[400px] mx-auto">
            {!inputPw ? (
              "Kindly enter the email linked to your account"
            ) : (
              <div>
                The link to reset your password has been sent to{" "}
                <span className="text-dakeb-green-dark font-semibold">
                  korededakeb@gmail.com
                </span>
              </div>
            )}
          </span>
          <Box mt={42} sx={{ maxWidth: 380 }} className="w-full">
            {!inputPw ? (
              <TextInput placeholder="Email" size="md" />
            ) : (
              <div>
                <button className="w-full h-[52px] border rounded-[5px] text-sm font-medium text-dakeb-blue-dark">
                  Resend the link
                </button>
                <div className="text-[#828282] mt-1 text-sm">
                  Resend in 01:45 secs
                </div>
              </div>
            )}
            {!inputPw && (
              <button
                className="mt-10 h-[52px] w-full bg-dakeb-green-mid text-white font-medium text-base rounded-[5px]"
                onClick={() => setInputPw(!inputPw)}
              >
                Log in
              </button>
            )}
            <div
              className="mt-8 flex items-center justify-center gap-3 cursor-pointer font-medium"
              onClick={() => navigate("/login")}
            >
              <BsArrowLeft size={24} />
              <span>Back to log in</span>
            </div>
          </Box>
        </div>
        <div className="mt-10 text-dakeb-black-light">
          &copy; Dakeb 2023 | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
