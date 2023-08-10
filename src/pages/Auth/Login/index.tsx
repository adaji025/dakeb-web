import { useState } from "react";
import { useForm } from "@mantine/form";
import {
  Box,
  Checkbox,
  TextInput,
  PasswordInput,
  LoadingOverlay,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setUser } from "../../../features/userSlice";
import useNotification from "../../../hooks/useNotification";

import Logo from "../../../assets/svgs/dakeb-logo.svg";
import styles from "../Auth.module.css";
import { userLogin } from "../../../services/auth/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {handleError} = useNotification()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const submit = (values: { email: string; password: string }) => {
    setLoading(true);
    userLogin(values.email, values.password)
      .then((res: any) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        navigate("/");
        dispatch(setUser(res.data.user));
      })
      .catch((error: any) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LoadingOverlay visible={loading} />
      <div className={`${styles.container}`}>
        <div className="flex gap-[63px] mx-auto">
          <div className={`w-1/2 hidden lg:block ${styles.login}`}></div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 px-4">
            <div className="min-h-4/5 mt-[64px] w-[96%] sm:w-4/5 border bg-white rounded-[5px] flex flex-col items-center justify-between pb-10">
              <div className="flex flex-col items-center">
                <img src={Logo} alt="" className="w-[80px] mt-6" />
                <div className="font-medium text-lg text-center text-black-mid">
                  Welcome back
                </div>
                <span className="text-center text-black-light block mt-2 text-sm">
                  Choose a method to log in
                </span>
                <div className="flex justify-center items-center raounded-[5px] gap-5 max-w-[380px] w-full h-[48px] mx-auto mt-6 bg-[#E0E0E04D]/30">
                  <FcGoogle size={24} />
                  <span className="text-dakeb-blue-mid font-medium">
                    Continue with Google
                  </span>
                </div>
                <div className="mt-5 flex gap-2 items-center">
                  <div className="h-[1px] flex-1 w-full bg-[#F2F2F2]" />
                  <div className=" whitespace-nowrap text-sm text-dakeb-black-light">
                    Or log in with e-mail
                  </div>
                  <div className="h-[1px] flex-1 w-[116px] bg-[#F2F2F2]" />
                  <hr />
                </div>
                <form onSubmit={form.onSubmit((values) => submit(values))}>
                  <Box mt={20} sx={{ maxWidth: 380 }} className="w-full">
                    <TextInput
                      required
                      placeholder="Username"
                      size="md"
                      {...form.getInputProps("email")}
                      className="w-full"
                    />
                    <PasswordInput
                      required
                      placeholder="Password"
                      size="md"
                      mt={24}
                      {...form.getInputProps("password")}
                    />
                    <div className="flex justify-between items-center mt-3">
                      <Checkbox
                        label={
                          <span className="text-dakeb-black-light text-xs">
                            Remember me
                          </span>
                        }
                      />
                      <div className="cursor-pointer text-xs text-dakeb-black-light">
                        Forgot password?
                      </div>
                    </div>
                    <button className="mt-6 h-[52px] w-full bg-dakeb-green-mid text-white font-medium text-base rounded-[5px]">
                      Log in
                    </button>
                  </Box>
                </form>
              </div>
              <div className="mt-10 text-dakeb-black-light">
                &copy; Dakeb 2023 | All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
