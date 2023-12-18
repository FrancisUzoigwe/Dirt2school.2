import { CiEdit } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";

const ProfileScreen = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center">
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
              <div>Profile</div>
              <Link to="/auth/settings">
                <div className="flex items-center">
                  Detail
                  <div>
                    <CiEdit className="text-xl" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full h-[180px] bg-white mt-4 rounded-md">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
