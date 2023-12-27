import { CiEdit } from "react-icons/ci";
import {
  MdMarkEmailRead,
  MdAccountBalance,
  MdManageAccounts,
} from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import vite from "../../../public/vite.svg";
import { IoSchoolSharp } from "react-icons/io5";
import ResetPassword from "./ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import { resetToggled } from "../../global/globalState";

const ProfileScreen = () => {
  const resetPage = useSelector((state: any) => state.reset);
  const dispatch = useDispatch();
  return (
    <>
      {resetPage && <ResetPassword />}
      <div className="w-full min-h-[100vh] bg-green-400 flex justify-center">
        {/* Desktop View */}
        <div className="max-sm:hidden w-[99%] h-[150px]  flex flex-col ">
          <div className="w-full items-center my-3 h-[200px] flex">
            <img
              className="w-[120px] h-[120px] ml-3 rounded-full border object-cover bg-white"
              src={vite}
              alt="Photo"
            />
            <div className="ml-5 text-white">
              <div className="text-3xl font-bold font-[Ever]">
                Kossyrisochukwu Francis Uzoigwe
              </div>
              <div className="text-sm font-bold font-[Ever]">
                kossyuzoigwe@gmail.com
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col ">
            <div className="w-[50%] max-lg:w-[60%]">
              <div className="w-full my-10  ml-3 mt-3 flex flex-col text-white ">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-[Ever] ">Phone:</div>
                    <div className="px-2 border ">0704747**86</div>
                  </div>
                  <div>
                    <div className="font-[Ever] ">Address:</div>
                    <div className="px-2 border ">House 96B, Ago-Hausa</div>
                  </div>
                </div>
              </div>
              <div className="w-full my-10  ml-3 mt-3 flex flex-col text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-[Ever] ">Acc. Number:</div>
                    <div className="px-2 border ">7047474886</div>
                  </div>
                  <div className="">
                    <div className="font-[Ever] ">Acc. Name:</div>
                    <div className="px-2 border ">Francis Kossyrisochukwu</div>
                  </div>
                </div>
              </div>
              <div className="w-full my-10  ml-3 mt-3 flex flex-col text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-[Ever] ">School Name:</div>
                    <div className="px-2 border ">0704747**86</div>
                  </div>
                  <div className="">
                    <div className="font-[Ever] ">Class:</div>
                    <div className="px-2 border ">Francis Kossyrisochukwu</div>
                  </div>
                </div>
                <div className="w-full h-auto mt-24 bg-green-400 flex items-center justify-center">
                  <button className="font-[Ever] text-sm px-3 py-2 rounded-md bg-white text-green-500 hover:cursor-pointer hover:scale-105 transition-all duration-300  ">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="max-sm:flex hidden w-[95%] h-full justify-center">
          <div className="w-full h-full  mt-2 rounded-lg flex flex-col items-center ">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center w-full">
                <div className="w-[100px] h-[100px] rounded-full border border-gray-400 bg-white mt-2">
                  <img src="" alt="" className="w-full h-full rounded-full" />
                </div>
                <div className="font-bold my-1 text-white">
                  Kossyrisochukwu Francis Uzoigwe
                </div>
                <div className="text-[12px] font-bold text-gray-400 pb-5">
                  kossyuzoigwe@gmail.com
                </div>
              </div>
              <div className="w-full flex justify-between text-[13px]">
                <div className="font-bold text-[16px]">Profile</div>
                {/* <ResetPassword/> */}
                {/* <Link to="/auth/settings"> */}
                <div
                  className="flex items-center hover:cursor-pointer font-bold"
                  onClick={() => {
                    dispatch(resetToggled());
                  }}
                >
                  Reset Password
                  <div>
                    <CiEdit className="text-xl" />
                  </div>
                </div>
                {/* </Link> */}
              </div>
              <div className="w-full h-auto my-3 bg-white mt-4 rounded-md">
                <div className="px-2 flex items-center justify-between text-[15px] mt-4">
                  <div className="font-bold flex items-center">
                    <div className="text-xl">
                      <MdMarkEmailRead />
                    </div>
                    <div className="ml-2">Email</div>
                  </div>
                  <div className="underline">kossyuzoigwe@gmail.com</div>
                </div>
                <br />
                <hr />
                <div className="px-2 flex items-center justify-between text-[15px] mt-2">
                  <div className="font-bold flex items-center">
                    <div className="text-xl">
                      <BsFillPhoneFill />
                    </div>
                    <div className="ml-2">Phone</div>
                  </div>
                  <div className="underline">0704747**86</div>
                </div>
                <br />
                <hr />
                <div className="px-2 flex items-center justify-between text-[15px] mt-2">
                  <div className="font-bold flex items-center">
                    <div className="text-xl">
                      <FaRegAddressCard />
                    </div>
                    <div className="ml-2">Address</div>
                  </div>
                  <div className="underline">96B, Ago-Hausa</div>
                </div>
                <br />
                <hr />
                <div className="px-2 flex items-center justify-between text-[15px] mt-2">
                  <div className="font-bold flex items-center">
                    <div className="text-xl">
                      <MdAccountBalance />
                    </div>
                    <div className="ml-2">Account Number</div>
                  </div>
                  <div className="underline">1477315759</div>
                </div>
                <br />
                <hr />
                <div className="px-2 flex items-center justify-between text-[15px] mt-2">
                  <div className="font-bold flex items-center">
                    <div className="text-xl">
                      <MdManageAccounts />
                    </div>
                    <div className="ml-2">Account Name</div>
                  </div>
                  <div className="underline">Francis Kossyrisochukwu</div>
                </div>
                <br />
                <hr />
                <div className="px-2 flex items-center justify-between text-[15px] mt-2">
                  <div className="font-bold flex items-center">
                    <div className="text-xl">
                      <IoSchoolSharp />
                    </div>
                    <div className="ml-2">School</div>
                  </div>
                  <div className="underline">Afara Technical High School</div>
                </div>
                <br />
                <hr />
                <div className="px-2 flex items-center justify-between text-[15px] mt-2">
                  <div className="font-bold flex items-center">
                    <div className="text-xl">
                      <SiGoogleclassroom />
                    </div>
                    <div className="ml-2">Class</div>
                  </div>
                  <div className="underline">SSS3A</div>
                </div>
                <br />
              </div>
              <div className="max-sm:mt-36 bg-green-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
