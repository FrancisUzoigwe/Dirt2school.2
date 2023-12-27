import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeResetToggled } from "../../global/globalState";

const ResetPassword = () => {
  const Reset = yup.object({
    currentPassword: yup.string().required(),
    newPassword: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Reset) });

  const onHandleSubmit = handleSubmit(async () => {
    console.log(Reset);
  });
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 flex items-center justify-center"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <form
          className="max-sm:w-[80%] sm:w-[50%] shadow-lg bg-white rounded-lg h-[auto] flex flex-col "
          onSubmit={onHandleSubmit}
        >
          <div className="font-[Ever] font-bold w-full h-auto flex items-center justify-center my-2 text-xl relative">
            Reset Password
            <div
              className="absolute top-1 right-3 hover:cursor-pointer hover:scale-125 transition-all duration-300"
              onClick={() => {
                dispatch(changeResetToggled());
              }}
            >
              <AiOutlineCloseCircle />
            </div>
          </div>
          <div className="ml-3 relative w-[90%]  px-1 py-1">
            <div className="ml-2 font-bold">Current Password: </div>
            <div className="w-full">
              <input
                type="text"
                className=" w-full h-full outline-none border-b-2 pl-2 "
                {...register("currentPassword")}
              />
              {errors.currentPassword?.message && (
                <div className="flex w-full justify-end items-center text-red-500">
                  Enter current password
                </div>
              )}
            </div>
          </div>
          <div className="ml-3 relative w-[90%]  px-1 py-1">
            <div className="ml-2 font-bold">New Password: </div>
            <div className="w-[85%]">
              <input
                type="text"
                className=" w-full h-full outline-none border-b-2 pl-2 "
                {...register("newPassword")}
              />
              {errors.newPassword?.message && (
                <div className="flex w-full justify-end items-center text-red-500">
                  New combination
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-auto flex items-center justify-center my-7">
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-green-400 text font-[Ever] text-white"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
