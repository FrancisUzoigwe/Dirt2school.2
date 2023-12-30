import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdContactMail } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import auth from "../../assets/Erased.png";
import IsLoadingButton from "../../components/private/IsLoadingButton";
import { registerApi } from "../../apis/studentAuthApi";

const RegisterScreen = () => {
  const Register = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Register) });

  const [loading, setLoading] = useState<boolean>(false);

  const onHandleSubmit = handleSubmit(async () => {
    setLoading(true);
    // registerApi().th
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
      {loading && <IsLoadingButton />}
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
          ></div>
          <div className="text-white font-[Ever] font-bold text-2xl my-1">
            Register
          </div>
          <motion.form
            variants={useAnimate}
            initial="hidden"
            animate="visible"
            className="w-full h-auto flex flex-col items-center "
            onSubmit={onHandleSubmit}
          >
            <div className="flex items-center my-4 justify-between w-[95%]">
              <div className="w-[48%] text-white rounded-md my-2 border relative h-[50px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  First Name.:
                </div>
                <div className=" w-full h-[35px] mt-1">
                  <input
                    type="text"
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("firstName")}
                    placeholder=""
                  />
                </div>

                {errors.firstName?.message && (
                  <div className="flex justify-end text-[12px] mt-[10px] font-bold">
                    Input your firstname
                  </div>
                )}
              </div>
              <div className="w-[48%] text-white rounded-md my-2 border relative h-[50px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Last Name.:
                </div>
                <div className=" w-full h-[35px] mt-1">
                  <input
                    type="text"
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("lastName")}
                    placeholder=""
                  />
                </div>

                {errors.lastName?.message && (
                  <div className="flex justify-end text-[12px] mt-[10px] font-bold">
                    Input your last name
                  </div>
                )}
              </div>
            </div>
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
            <div className="mt-5 flex justify-center items-center w-full">
              <button
                type="submit"
                className="w-[90%] py-2 rounded-md bg-white text-green-400 font-[Ever] hover:shadow-lg transition-all duration-300 "
              >
                Signup
              </button>
            </div>
            <div className="flex items-center mt-3 text-white">
              Already have an account?{" "}
              <Link to="/signin">
                <div className="ml-2 text-red-600 underline">Signin</div>
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
                  Get Started for Free
                </div>
                <div className="text-3xl font-bold my-1">
                  Create new account
                </div>
                <Link to="/signin">
                  <div className="flex items-center text-sm  my-2 font-bold">
                    Already a member ? <div className="ml-[1px]">Signin</div>
                  </div>
                </Link>
                <motion.form
                  variants={useAnimate}
                  initial="hidden"
                  animate="visible"
                  className="w-[90%] h-[50px] flex flex-col items-center"
                  onSubmit={onHandleSubmit}
                >
                  <div className="w-full h-auto flex items-center justify-between">
                    <div className="w-[46%] text-white rounded-md my-2  relative h-[55px] ">
                      <div className=" absolute mt-1 ml-5 w-auto font-[Ever]  text-sm">
                        FirstName
                      </div>
                      <div className=" w-full h-[40px] mt-4 border-b relative">
                        <div className="absolute right-2">
                          <MdContactMail className="text-2xl" />
                        </div>
                        <input
                          type="text"
                          className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-gray-400"
                          {...register("firstName")}
                          placeholder="John"
                        />
                      </div>

                      {errors.firstName?.message && (
                        <div className="flex justify-end text-sm  font-bold">
                          Enter your first name
                        </div>
                      )}
                    </div>
                    <div className="w-[46%] text-white rounded-md my-2  relative h-[55px] ">
                      <div className=" absolute mt-1 ml-5 w-auto font-[Ever]  text-sm">
                        LastName
                      </div>
                      <div className=" w-full h-[40px] mt-4 border-b relative">
                        <div className="absolute right-2">
                          <MdContactMail className="text-2xl" />
                        </div>
                        <input
                          type="text"
                          className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-gray-400"
                          {...register("lastName")}
                          placeholder="Doe"
                        />
                      </div>

                      {errors.lastName?.message && (
                        <div className="flex justify-end text-sm  font-bold">
                          Enter your last name
                        </div>
                      )}
                    </div>
                  </div>
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
                      Create account
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

export default RegisterScreen;
