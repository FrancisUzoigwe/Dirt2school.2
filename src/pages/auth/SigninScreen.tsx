import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ResetPassword from "../screen/ResetPassword";
import { resetToggled } from "../../global/globalState";
import { motion } from "framer-motion";
import auth from "../../assets/Erased.png";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const resetPage = useSelector((state: any) => state.reset);

  const Register = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Register) });

  const onHandleSubmit = handleSubmit(async () => {
    console.log("Normally");
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
        {/* Mobile View */}
        <div className="max-sm:flex hidden w-full h-auto flex-col items-center">
          <div
            className="w-[98%]  my-[6px] h-[250px] rounded-lg"
            style={{
              backgroundImage: `url(${auth})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <video
              src={vid}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
              controls={false}
            /> */}
          </div>
          {/* <div className="text-white font-[Ever] font-bold">Get Started</div> */}
          <div className="text-white font-[Ever] font-bold text-2xl my-1">
            Signin
          </div>
          <motion.form
            variants={useAnimate}
            animate="visible"
            initial="hidden"
            className="w-full h-auto flex flex-col items-center "
            onSubmit={onHandleSubmit}
          >
            <div className="flex items-center my-4 justify-between w-[95%]">
              <div className="w-[48%] text-white rounded-md my-2 border relative h-[50px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Email.:
                </div>
                <div className=" w-full h-[35px] mt-1">
                  <input
                    type="text"
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("email")}
                    placeholder=""
                  />
                </div>

                {errors.email?.message && (
                  <div className="flex justify-end text-[12px] mt-[10px] font-bold">
                    Input your firstname
                  </div>
                )}
              </div>
              <div className="w-[48%] text-white rounded-md my-2 border relative h-[50px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Password.:
                </div>
                <div className=" w-full h-[35px] mt-1">
                  <input
                    type="text"
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("password")}
                    placeholder=""
                  />
                </div>
                {errors.password?.message && (
                  <div className="flex justify-end text-[12px] mt-[10px] font-bold">
                    Input your last name
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 w-full flex justify-center items-center">
              <button
                type="submit"
                className="w-[90%] py-2 rounded-md bg-white text-green-400 font-[Ever] hover:shadow-lg transition-all duration-300"
              >
                Signin
              </button>
            </div>
            <div
              className="mt-4 flex items-center w-[93%] justify-end hover:cursor-pointer "
              onClick={() => {
                dispatch(resetToggled());
              }}
            >
              <div className="flex justify-end items-center ">
                Forgotten password?
              </div>
              <div className="ml-1 text-red-500">Reset Here</div>
            </div>
            <div className="flex items-center  text-white">
              Don't have an account?{" "}
              <Link to="/register ">
                <div className="ml-2 text-red-600 underline">Signup</div>
              </Link>
            </div>
          </motion.form>
        </div>
        {/* Desktop Screen */}
        <div className="max-sm:hidden w-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 h-[100vh] flex justify-center items-center">
          <div className="w-full h-[100vh] justify-between items-center flex ">
            <div className="w-[55%] max-md:w-[90%] h-full flex items-center justify-end">
              <div className="w-[90%] h-[60%] text-white  flex flex-col  ">
                <div className="font-bold uppercase text-sm my-1">
                  Continue with zero stress
                </div>
                <div className="text-3xl font-bold my-1">Welcome back</div>
                <Link to="/register">
                  <div className="flex items-center text-sm  my-2 font-bold">
                    Not a member ? <div className="ml-[1px]">Signup</div>
                  </div>
                </Link>
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
                      Email
                    </div>
                    <div className=" w-full h-[40px] mt-4 border-b relative">
                      <div className="absolute right-2">
                        <IoMail className="text-2xl" />
                      </div>
                      <input
                        type="text"
                        className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-gray-400"
                        {...register("email")}
                        placeholder="example@gmail.com"
                      />
                    </div>
                    {errors.email?.message && (
                      <div className="flex justify-end text-sm  font-bold">
                        Enter your email address
                      </div>
                    )}
                  </div>
                  <div className="w-full text-white rounded-md  relative h-[55px] ">
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
                        {...register("password")}
                        placeholder="eg. johndoe128@"
                      />
                    </div>

                    {errors.password?.message && (
                      <div className="flex justify-end text-sm  font-bold">
                        Enter your email address
                      </div>
                    )}
                  </div>
                  <div className="w-full h-auto flex justify-center items-center mt-10">
                    <button
                      className="px-5 py-2 rounded-lg bg-white text-green-500 hover:shadow-lg"
                      type="submit"
                    >
                      Login account
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

export default SigninScreen;
