import { MdDashboard, MdAccountCircle, MdSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userChangedToggled, userToggled } from "../../global/globalState";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sider = () => {
  const [side, setSide] = useState<boolean>(false);
  const onSide = () => {
    setSide(!side);
  };
  const dispatch = useDispatch();
  const uToggle = useSelector((state: any) => state.uToggle);
  return (
    <div
      className={`${
        !uToggle ? "w-[150px]" : "w-[60px]"
      } h-[calc(100vh-60px)] flex justify-center`}
    >
      <div className="w-[150px]  h-full flex flex-col items-center fixed ">
        <div
          className={`${
            !uToggle ? "w-[150px]" : "w-[60px]"
          }  h-[calc(100vh-60px)] bg-gradient-to-tr from-green-400 via-green-600 to-green-700 flex flex-col items-center`}
        >
          <div className="mt-3">
            <div
              onClick={() => {
                onSide();
              }}
            >
              {side ? (
                <MdDashboard
                  className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-[1.2] text-white"
                  onClick={() => {
                    dispatch(userChangedToggled());
                  }}
                />
              ) : (
                <MdDashboard
                  className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-[1.2] text-white"
                  onClick={() => {
                    dispatch(userToggled());
                  }}
                />
              )}
            </div>
          </div>
          <div className="text-white">
            <Link to="/auth">
              <div className="mt-10 flex items-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
                <RxDashboard className="text-3xl  " />
                {!uToggle && <div className="ml-2 font-bold">Dashboard</div>}
              </div>
            </Link>
            <Link to="/auth/profile">
              <div className="mt-10 flex items-center hover:scale-105 hover:cursor-pointer transition-all duration-300 ">
                <MdAccountCircle className="text-3xl  " />
                {!uToggle && <div className="ml-2 font-bold">Profile</div>}
              </div>
            </Link>
            <Link to="/auth/settings">
              <div className="mt-10 flex items-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
                <MdSettings className="text-3xl  " />
                {!uToggle && <div className="ml-2 font-bold">Edit Profile</div>}
              </div>
            </Link>
            <div className="mt-56 flex items-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
              <RiLogoutCircleRLine className="text-3xl rotate-180 " />
              {!uToggle && <div className="ml-2 font-bold">Logout</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
