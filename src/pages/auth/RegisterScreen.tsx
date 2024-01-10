import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import auth from "../../assets/Erased.png";
import { useNavigate } from "react-router-dom";
import vite from "../../../src/assets/profile.svg";
import IsLoadingButton from "../../components/private/IsLoadingButton";
import { registerApi } from "../../apis/studentAuthApi";
import Swal from "sweetalert2";

const RegisterScreen = () => {
  const navigate = useNavigate();

  const useAnimate = {
    visible: { x: 0, opacity: 1, transition: { delay: 0.5 } },
    hidden: { x: "-400px", opacity: 0 },
  };
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

  const [state, setState] = useState<boolean>(false);

  const onHandleSubmit = handleSubmit(async (data) => {
    setState(true);
    const { firstName, email, password, lastName } = data;
    const myForm = new FormData();
    myForm.append("firstName", firstName);
    myForm.append("lastName", lastName);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("avatar", image);

    registerApi(myForm).then((res: any) => {
      // console.log("Checking response: ", res);
      if (res) {
        Swal.fire({
          icon: "success",
          text: `Your account has been created sucessfully`,
          timer: 3000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/signin");
          setState(false);
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Error occured while creating account",
          footer: "Why this error?",
          timerProgressBar: true,
          timer: 3000,
        }).then(() => {
          navigate("/register");
          setState(false);
        });
      }
    });
  });

  const useLoadingAnimate = {
    visible: { x: 0, opacity: 1, transition: { delay: 0.5 } },
    hidden: { x: "-400px", opacity: 0 },
  };

  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState(vite);
  const onHandleImage = (e: any) => {
    const local = e.target.files[0];
    const save = URL.createObjectURL(local);
    setAvatar(save);
    setImage(local);
  };

  return (
    <>
      {state && <IsLoadingButton />}
      <div className="w-full min-h-[100vh] bg-green-400 flex flex-col">
        <div className="w-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 h-[110vh] flex justify-center items-center">
          <div className="w-full h-full justify-between items-center flex ">
            <div className="w-[55%] max-sm:w-full max-md:w-full h-full flex items-center justify-end">
              <div className="w-[90%] h-[90%] text-white  flex flex-col  ">
                <div className="font-bold uppercase text-sm my-1">
                  Get Started for Free
                </div>
                <div className="text-3xl font-bold my-1">
                  Create new account
                </div>
                <div className="w-full h-[150px]  flex items-center ">
                  <div className="relative">
                    <label htmlFor="mobileImage">
                      {/* <div className="absolute bottom-0 right-2 px-[6px] py-[6px] rounded-full bg-black transition-all duration-500 hover:bg-gray-600 hover:cursor-pointer">
                        <IoCamera className="text-2xl text-white" />
                      </div> */}
                    </label>
                    <input
                      type="file"
                      id="mobileImage"
                      hidden
                      onChange={onHandleImage}
                    />
                    <img
                      src={avatar ? avatar : image}
                      alt=""
                      className="w-[120px] h-[120px] rounded-full  object-cover bg-white ml-3    "
                    />
                  </div>
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
                      <div className=" absolute mt-1 ml-5 w-auto  text-sm">
                        FirstName:
                      </div>
                      <div className=" w-full h-[40px] mt-4 border-b relative">
                        {/* <div className="absolute right-2">
                          <MdContactMail className="text-2xl" />
                        </div> */}
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
                      <div className=" absolute mt-1 ml-5 w-auto  text-sm">
                        LastName:
                      </div>
                      <div className=" w-full h-[40px] mt-4 border-b relative">
                        {/* <div className="absolute right-2">
                          <MdContactMail className="text-2xl" />
                        </div> */}
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
                    <div className=" absolute mt-1 ml-5 w-auto  text-sm">
                      Email:
                    </div>
                    <div className=" w-full h-[40px] mt-4 border-b relative">
                      {/* <div className="absolute right-2">
                        <IoMail className="text-2xl" />
                      </div> */}
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
                    <div className=" absolute mt-1 ml-5 w-auto  text-sm">
                      Password:
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
                  <div className="w-full flex-col h-auto flex items-center mt-10">
                    <button
                      className="px-5 py-2 rounded-lg bg-white text-green-500 hover:shadow-lg"
                      type="submit"
                    >
                      {state ? <IsLoadingButton /> : "Create Account"}
                    </button>
                    {state && (
                      <motion.div
                        variants={useLoadingAnimate}
                        animate="visible"
                        initial="hidden"
                        className="animate-pulse mt-4 text-base text-center"
                      >
                        Please wait...This could take up to a minute
                      </motion.div>
                    )}
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
