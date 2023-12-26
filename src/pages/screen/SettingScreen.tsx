import { IoCamera } from "react-icons/io5";
import vite from "../../../public/vite.svg";
import { useState } from "react";
import IsLoadingButton from "../../components/private/IsLoadingButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SettingScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const onload = () => {
    setLoading(!loading);
  };

  const Schema = yup.object({
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
    accNumber: yup.string().required(),
    accName: yup.string().required(),
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

  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState(vite);
  const onHandleImage = (e: any) => {
    const local = e.target.files[0];
    const save = URL.createObjectURL(local);
    setAvatar(save);
    setImage(local);
  };

  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <div className="w-full min-h-[100vh] flex justify-center ">
      <>
        {scroll ? (
          <div className="max-sm:flex hidden w-full justify-center ">
            <div className="w-[97%] flex  text-white flex-col">
              <div className="flex justify-center w-full">
                <div
                  className="fixed w-full flex items-center justify-center z-[500] py-[2px] uppercase bg-green-400 text-white font-[Ever] font-bold"
                 
                >
                  Edit Profile
                </div>
                <div className="w-full ">
                  <div className="flex mt-7 items-center">
                    <div className="relative flex items-center justify-center ">
                      <div className="absolute flex-col  bottom-1 right-1 px-1 py-1 rounded-full hover:bg-gray-900  bg-black transition-all duration-300  ">
                        <label htmlFor="image">
                          <IoCamera className="text-xl text-white" />
                        </label>
                      </div>
                      <input
                        type="file"
                        id="image"
                        hidden
                        onChange={onHandleImage}
                      />
                      <img
                        className="h-[120px] w-[130px] rounded-xl border-none bg-white object-cover"
                        src={avatar ? avatar : image}
                      />
                    </div>
                    <div className="ml-2">
                      <div className="text-lg font-[Ever]">
                        Francis Kossyrisochukwu
                      </div>
                      <div className="text-xs font-bold">
                        kossyuzoigwe@gmail.com{" "}
                      </div>
                    </div>
                  </div>
                  <form
                    className="w-full z-[200] h-auto flex flex-col items-center mt-4 "
                    onSubmit={onHandleSubmit}
                  >
                    <div className="w-[99%] rounded-md my-2 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Email:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          type="text"
                          className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                          disabled
                          placeholder="kossyuzoigwe@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Phone:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          type="text"
                          {...register("phoneNumber")}
                          className="w-full pl-3 h-full outline-none border-none bg-transparent"
                          onPaste={handlePaste}
                        />
                        {errors.phoneNumber?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your phone number
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Address:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("address")}
                          type="text"
                          className="w-full pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.address?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your home address
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Account No.:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          type="text"
                          {...register("accNumber")}
                          className="w-full pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accNumber?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your account number
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Account Name.:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("accName")}
                          type="text"
                          className="w-full  pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accName?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your account name
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        School:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("accName")}
                          type="text"
                          className="w-full  pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accName?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your School name
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Class:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("accName")}
                          type="text"
                          className="w-full  pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accName?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your class
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="font-[Ever] text-sm py-2 px-3 rounded-md bg-white text-green-400"
                        onClick={() => {
                          onload();
                        }}
                      >
                        {!loading ? "   Update Profile" : <IsLoadingButton />}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-sm:flex hidden w-full justify-center ">
            <div className="w-[97%] flex  text-white flex-col">
              <div className="flex justify-center w-full">
                <div
                  className="fixed w-full flex items-center justify-center  py-[2px] uppercase font-[Ever] font-bold"
                  style={{ backdropFilter: "blur(40px)" }}
                >
                  Edit Profile
                </div>
                <div className="w-full ">
                  <div className="flex mt-7 items-center">
                    <div className="relative flex items-center justify-center ">
                      <div className="absolute flex-col  bottom-1 right-1 px-1 py-1 rounded-full hover:bg-gray-900  bg-black transition-all duration-300  ">
                        <label htmlFor="image">
                          <IoCamera className="text-xl text-white" />
                        </label>
                      </div>
                      <input
                        type="file"
                        id="image"
                        hidden
                        onChange={onHandleImage}
                      />
                      <img
                        className="h-[120px] w-[130px] rounded-xl border-none bg-white object-cover"
                        src={avatar ? avatar : image}
                      />
                    </div>
                    <div className="ml-2">
                      <div className="text-lg font-[Ever]">
                        Francis Kossyrisochukwu
                      </div>
                      <div className="text-xs font-bold">
                        kossyuzoigwe@gmail.com{" "}
                      </div>
                    </div>
                  </div>
                  <form
                    className="w-full z-[200] h-auto flex flex-col items-center mt-4 "
                    onSubmit={onHandleSubmit}
                  >
                    <div className="w-[99%] rounded-md my-2 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Email:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          type="text"
                          className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                          disabled
                          placeholder="kossyuzoigwe@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Phone:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          type="text"
                          {...register("phoneNumber")}
                          className="w-full pl-3 h-full outline-none border-none bg-transparent"
                          onPaste={handlePaste}
                        />
                        {errors.phoneNumber?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your phone number
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Address:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("address")}
                          type="text"
                          className="w-full pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.address?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your home address
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Account No.:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          type="text"
                          {...register("accNumber")}
                          className="w-full pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accNumber?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your account number
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Account Name.:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("accName")}
                          type="text"
                          className="w-full  pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accName?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your account name
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        School:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("accName")}
                          type="text"
                          className="w-full  pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accName?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your School name
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[99%] rounded-md my-3 border relative h-[40px] ">
                      <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                        Class:{" "}
                      </div>
                      <div className=" w-full h-[30px] mt-1">
                        <input
                          onPaste={handlePaste}
                          {...register("accName")}
                          type="text"
                          className="w-full  pl-3 h-full outline-none border-none bg-transparent"
                        />
                        {errors.accName?.message && (
                          <div className="flex w-full justify-end text-xs mt-[2px] font-bold">
                            Update your class
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="font-[Ever] text-sm py-2 px-3 rounded-md bg-white text-green-400"
                        onClick={() => {
                          onload();
                        }}
                      >
                        {!loading ? "   Update Profile" : <IsLoadingButton />}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SettingScreen;
