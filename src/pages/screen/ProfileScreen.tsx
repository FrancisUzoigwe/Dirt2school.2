import {
  MdMarkEmailRead,
  MdAccountBalance,
  MdManageAccounts,
} from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";

const ProfileScreen = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] bg-white flex justify-center">
        <div className=" w-[95%] h-full justify-center">
          <div className="w-full h-full  mt-2 rounded-lg flex flex-col items-center ">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center w-full">
                <div className="w-[100px] h-[100px] rounded-full border border-gray-400 bg-white mt-2">
                  <img src="" alt="" className="w-full h-full rounded-full" />
                </div>
                <div className="font-bold my-1 text-2xl  text-center">
                  Francis Uzoigwe
                </div>
                <div className="text-[12px] font-bold pb-5">
                  kossyuzoigwe@gmail.com
                </div>
              </div>
              <div className="w-full flex justify-between text-[13px]">
                <div className="font-bold text-[16px] ">Profile</div>
                {/* <ResetPassword/> */}
                {/* <Link to="/auth/settings"> */}
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
