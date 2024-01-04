import { useState } from "react";
import IsLoadingButton from "../../components/private/IsLoadingButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SettingScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const Schema = yup.object({
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
    accNumber: yup.string().required(),
    bank: yup.string().required(),
    schoolName: yup.string().required(),
    schoolClass: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    const {
      phoneNumber,
      address,
      accNumber,
      accName,
      schoolName,
      schoolClass,
    } = data;
    console.log({
      phoneNumber,
      address,
      accNumber,
      accName,
      schoolName,
      schoolClass,
    });
  });

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  // const onHandleImage = (e: any) => {
  //   const local = e.target.files[0];
  //   const save = URL.createObjectURL(local);
  //   setAvatar(save);
  //   setImage(local);
  // };

  // const [scroll, setScroll] = useState<boolean>(false);
  // const onScroll = () => {
  //   if (window.scrollY >= 10) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };
  // window.addEventListener("scroll", onScroll);
  return (
    <>
      {loading && <IsLoadingButton />}
      <div className="w-full min-h-[100vh] flex justify-center ">
        <div className=" w-full h-auto flex flex-col items-center ">
          <div className="ml-3 my-10 uppercase font-[Ever] text-white font-bold">
            Edit Profile
          </div>

          {/* Input Part */}
          <form
            className="text-white ml-3 max-sm:w-[90%] md:w-[95%]  flex flex-col "
            onSubmit={onHandleSubmit}
          >
            <div className="w-full flex justify-between items-center my-2">
              <div className="w-[47%] rounded-md my-2 border relative h-[40px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Phone:{" "}
                </div>
                <div className=" w-full h-[30px] mt-1">
                  <input
                    type="text"
                    onPaste={handlePaste}
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("phoneNumber")}
                    placeholder=""
                  />
                </div>
                {errors.phoneNumber?.message && (
                  <div className="flex justify-end text-[12px] mt-[2px] font-bold">
                    Input your phone
                  </div>
                )}
              </div>
              <div className="w-[47%] rounded-md my-2 border relative h-[40px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Address:{" "}
                </div>
                <div className=" w-full h-[30px] mt-1">
                  <input
                    type="text"
                    onPaste={handlePaste}
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("address")}
                  />
                </div>
                {errors.address?.message && (
                  <div className="flex justify-end text-[12px] mt-[2px] font-bold">
                    Provide a valid physical address
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between items-center my-2">
              <div className="w-[47%] rounded-md my-2 border relative h-[40px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Account No.:{" "}
                </div>
                <div className=" w-full h-[30px] mt-1">
                  <input
                    type="text"
                    onPaste={handlePaste}
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("accNumber")}
                    placeholder=""
                  />
                </div>
                {errors.accNumber?.message && (
                  <div className="flex justify-end text-[12px] mt-[2px] font-bold">
                    Input your account number
                  </div>
                )}
              </div>
              <div className="w-[47%]  rounded-md my-2 border relative h-[40px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm ">
                  Bank.:{" "}
                </div>

                <select className="bg-green-400 border-none w-full h-full outline-none  pl-3">
                  <option value="">Select Bank</option>
                  <option value="">OPay Digital Service (OPay)</option>
                  <option value="">Kuda Bank</option>
                  <option value="">Gurantee Trusted Bank</option>
                  <option value="">PalmPay Digital Service</option>
                </select>
                {errors.bank?.message && (
                  <div className="flex justify-end text-[12px] mt-[2px] font-bold">
                    Account holder name
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between items-center my-2">
              <div className="w-[47%] rounded-md my-2 border relative h-[40px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  School.:{" "}
                </div>
                <div className=" w-full h-[30px] mt-1">
                  <input
                    type="text"
                    onPaste={handlePaste}
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("schoolName")}
                    placeholder=""
                  />
                </div>
                {errors.schoolName?.message && (
                  <div className="flex justify-end text-[12px] mt-[2px] font-bold">
                    Provide a valid school name
                  </div>
                )}
              </div>
              <div className="w-[47%] rounded-md my-2 border relative h-[40px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Class.:{" "}
                </div>
                <div className=" w-full h-[30px] mt-1">
                  <input
                    type="text"
                    maxLength={5}
                    onPaste={handlePaste}
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("schoolClass")}
                    placeholder="Eg. SSS2B"
                  />
                </div>
                {errors.schoolClass?.message && (
                  <div className="flex justify-end text-[12px] mt-[2px] font-bold">
                    Please specify
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center mt-5">
              <button
                type="submit"
                className=" bg-white text-green-400 rounded-md px-4 py-2 font-[Ever] text-[14px] hover:scale-105 transition-all duration-300 hover:shadow-md"
              >
                {loading ? <IsLoadingButton /> : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingScreen;
