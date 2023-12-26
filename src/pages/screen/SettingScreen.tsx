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
          // Mobile View
          <div className="max-sm:flex hidden w-full justify-center ">
            <div className="w-[97%] flex  text-white flex-col">
              <div className="flex justify-center w-full">
                <div className="fixed w-full flex items-center justify-center z-[300] py-[2px] uppercase bg-green-400 text-white font-[Ever] font-bold">
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
                    <div className="mt-1">
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
                    <div className="mt-36"></div>
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
                    <div className="mt-1">
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
                    <div className="mt-36"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Desktop View */}
        <div className="max-sm:hidden w-full h-auto flex flex-col ">
          <div className="ml-3 uppercase font-[Ever] text-white font-bold">
            Edit Profile
          </div>
          {/* Image Part */}
          <div className="w-full h-[150px]  flex items-center ">
            <div className="relative">
              <label htmlFor="mobileImage">
                <div className="absolute bottom-0 right-2 px-[6px] py-[6px] rounded-full bg-black transition-all duration-500 hover:bg-gray-600 hover:cursor-pointer">
                  <IoCamera className="text-2xl text-white" />
                </div>
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
                className="w-[120px] h-[120px] rounded-full object-cover bg-white ml-3    "
              />
            </div>
          </div>
          {/* Input Part */}
          <form
            className="text-white ml-3 w-[50%] max-md:w-[70%] flex flex-col "
            onSubmit={onHandleSubmit}
          >
            <div className="w-full flex justify-between items-center my-2">
              <div className="w-[45%] rounded-md my-2 border relative h-[40px] ">
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
              <div className="w-[45%] rounded-md my-2 border relative h-[40px] ">
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
              <div className="w-[45%] rounded-md my-2 border relative h-[40px] ">
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
              <div className="w-[45%] rounded-md my-2 border relative h-[40px] ">
                <div className=" absolute -my-[10px] ml-5 w-auto font-[Ever] bg-green-400 text-sm">
                  Account Name.:{" "}
                </div>
                <div className=" w-full h-[30px] mt-1">
                  <input
                    type="text"
                    onPaste={handlePaste}
                    className="w-full pl-3 h-full outline-none border-none bg-transparent placeholder:text-white"
                    {...register("accName")}
                  />
                </div>
                {errors.accName?.message && (
                  <div className="flex justify-end text-[12px] mt-[2px] font-bold">
                    Account holder name
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between items-center my-2">
              <div className="w-[45%] rounded-md my-2 border relative h-[40px] ">
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
              <div className="w-[45%] rounded-md my-2 border relative h-[40px] ">
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
            <div className="w-full h-auto flex  items-center mt-5">
              <button
                type="submit"
                className=" bg-white text-green-400 rounded-md px-4 py-2 font-[Ever] text-[14px] hover:scale-105 transition-all duration-300 hover:shadow-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default SettingScreen;
