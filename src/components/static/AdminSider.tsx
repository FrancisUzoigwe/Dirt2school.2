import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { adminToggle, changedAdminToggle } from "../../global/globalState";
import { useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineManageHistory } from "react-icons/md";
const AdminSider = () => {
  const adminTog = useSelector((state: any) => state.aToggle);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState<boolean>(false);
  const onClicked = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className={`${adminTog ? "w-[150px]" : "w-[50px]"}  h-full`}>
        <div
          className={`${
            adminTog ? "w-[150px]" : "w-[50px]"
          } h-full  flex flex-col fixed`}
        >
          <div
            className="flex justify-end mt-1"
            onClick={() => {
              onClicked();
            }}
          >
            {clicked ? (
              <IoIosArrowDroprightCircle
                className="text-3xl text-white hover:cursor-pointer hover:scale-110 transition-all duration-300"
                onClick={() => {
                  dispatch(changedAdminToggle());
                }}
              />
            ) : (
              <IoIosArrowDroprightCircle
                className="text-3xl text-white hover:cursor-pointer hover:scale-110 transition-all duration-300"
                onClick={() => {
                  dispatch(adminToggle());
                }}
              />
            )}
          </div>

          <div className="flex items-center justify-center my-5 ">
            <Link to="/adminroute">
              <div className="flex justify-center items-center font-bold">
              <PiStudentFill className="text-2xl" />
                {adminTog && (
                  <div className="ml-2">
                Students
                  </div>
                )}
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center my-5 ">
            <Link to="/adminroute/history">
              <div className="flex justify-center items-center font-bold">
              <MdOutlineManageHistory className="text-2xl" />
                {adminTog && (
                  <div className="ml-2">
                   Histories
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSider;
