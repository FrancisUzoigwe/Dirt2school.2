import vid from "../../assets/video (2160p).mp4";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const SigninScreen = () => {
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
  return (
    <div className="w-full min-h-[100vh] bg-green-400 flex flex-col">
      {/* Mobile View */}
      <div className="max-sm:flex hidden w-full h-auto flex-col items-center">
        <div className="w-[98%] bg-white my-[6px] h-[250px] rounded-lg">
          <video
            src={vid}
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            muted
            loop
            controls={false}
          />
        </div>
        {/* <div className="text-white font-[Ever] font-bold">Get Started</div> */}
        <div className="text-white font-[Ever] font-bold text-2xl my-1">
          Signin
        </div>
        <form
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
          <div className="mt-5">
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-white text-green-400 font-[Ever]"
            >
              Signin
            </button>
          </div>
          <div className="flex items-center mt-3 text-white">
            Don't have an account?{" "}
            <Link to="/register ">
              <div className="ml-2 text-red-600 underline">Signup</div>
            </Link>
          </div>
        </form>
      </div>
      {/* Desktop Screen */}
      <div className="max-sm:hidden">DesktopScreen</div>
    </div>
  );
};

export default SigninScreen;
