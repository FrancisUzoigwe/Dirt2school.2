import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ResetPassword from "../screen/ResetPassword";
import { mainStudent, resetToggled } from "../../global/globalState";
import { motion } from "framer-motion";
import auth from "../../assets/Erased.png";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import IsLoadingButton from "../../components/private/IsLoadingButton";
import { loginApi } from "../../apis/studentAuthApi";

const AdminSignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resetPage = useSelector((state: any) => state.reset);

  const Signin = yup.object({
    adminEmail: yup.string().required(),
    token: yup.string().required(),
    adminPassword: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Signin) });

  const [state, setState] = useState<boolean>(false);

  const onHandleSubmit = handleSubmit(async (data) => {
    setState(true);
    const { adminEmail, adminPassword } = data;
    loginApi({ adminEmail, adminPassword })
      .then((cred: any) => {
        dispatch(mainStudent(cred));
        console.log(cred);
      })
      .then(() => {
        navigate("/auth");
        setState(false);
      });
  });

  const useAnimate = {
    visible: { x: 0, opacity: 1, transition: { delay: 0.5 } },
    hidden: { x: "-400px", opacity: 0 },
  };

  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  return (
    <>
      {resetPage && <ResetPassword />}
      <div className="w-full min-h-[100vh] bg-green-400 flex flex-col">
        <div className=" w-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 h-[100vh] flex justify-center items-center">
          <div className="w-full h-[100vh] justify-between items-center flex ">
            <div className="w-[55%] max-md:w-[90%] h-full flex items-center justify-end">
              <div className="w-[90%] h-[60%] text-white  flex flex-col  ">
                <div className="font-bold uppercase text-sm my-1">
                  Continue with zero stress
                </div>
                <div className="text-3xl font-bold my-1">
                  Welcome back Admin
                </div>
                <Link to="/adminregister">
                  <div className="flex items-center text-sm  my-2 font-bold">
                    Not an admin ? <div className="ml-[1px]">Signup</div>
                  </div>
                </Link>
                <div
                  className="text-sm flex items-center hover:cursor-pointer"
                  onClick={() => {
                    dispatch(resetToggled());
                  }}
                >
                  Forgotten password? <div className="ml-1">Reset Here</div>
                </div>
                <motion.form
                  variants={useAnimate}
                  animate="visible"
                  initial="hidden"
                  className="w-[90%] h-[50px] flex flex-col items-center"
                  onSubmit={onHandleSubmit}
                >
                  <div className="w-full h-auto flex items-center justify-between"></div>
                  <div className="w-full text-white rounded-md my-8  relative h-[55px] ">
                    <div className=" absolute mt-1 ml-5 w-auto font-[Ever]  text-sm">
                      adminEmail
                    </div>
                    <div className=" w-full h-[40px] mt-4 border-b relative">
                      <div className="absolute right-2">
                        <IoMail className="text-2xl" />
                      </div>
                      <input
                        type="text"
                        className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-gray-400"
                        {...register("adminEmail")}
                        placeholder="example@gmail.com"
                      />
                    </div>
                    {errors.adminEmail?.message && (
                      <div className="flex justify-end text-sm  font-bold">
                        Enter your adminEmail address
                      </div>
                    )}
                  </div>
                  <div className="w-full text-white rounded-md  relative h-[55px] ">
                    <div className=" absolute mt-1 ml-5 w-auto font-[Ever]  text-sm">
                      Token
                    </div>
                    <div className=" w-full h-[40px] mt-4 border-b relative">
                      <div className="hover:cursor-pointer absolute right-2"></div>
                      <input
                        type="text"
                        className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-gray-400"
                        {...register("token")}
                        placeholder="***34"
                      />
                    </div>

                    {errors.token?.message && (
                      <div className="flex justify-end text-sm  font-bold">
                       Enter token 
                      </div>
                    )}
                  </div>
                  <div className="w-full text-white rounded-md mt-6 relative h-[55px] ">
                    <div className=" absolute mt-1 ml-5 w-auto font-[Ever]  text-sm">
                      Password
                    </div>
                    <div className=" w-full h-[40px] mt-4 border-b relative">
                      <div
                        className="hover:cursor-pointer absolute right-2"
                        onClick={() => {
                          onShow();
                        }}
                      >
                        {!show ? (
                          <FaEye className="text-2xl" />
                        ) : (
                          <FaEyeSlash className="text-2xl" />
                        )}
                      </div>
                      <input
                        type={`${show ? "text" : "password"}`}
                        className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-gray-400"
                        {...register("adminPassword")}
                        placeholder="eg. johndoe128@"
                      />
                    </div>

                    {errors.adminPassword?.message && (
                      <div className="flex justify-end text-sm  font-bold">
                        Enter your adminEmail address
                      </div>
                    )}
                  </div>
                  <div className="w-full h-auto flex justify-center items-center mt-10">
                    <button
                      className="px-5 py-2 rounded-lg bg-white text-green-500 hover:shadow-lg"
                      type="submit"
                    >
                      {state ? <IsLoadingButton /> : "Signin Account"}
                    </button>
                  </div>
                </motion.form>
              </div>
            </div>
            <div
              className="w-[45%] h-full max-md:hidden "
              style={{ backgroundImage: `url(${auth})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignin;
