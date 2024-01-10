import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { RiMenu3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../private/DropDown";
import { dropped } from "../../global/globalState";


const Header = () => {
  const dispatch = useDispatch();
  const drop = useSelector((state: any) => state.dropDown);
  const userFirst = useSelector((state: any) => state.student?.firstName);
  const userLast = useSelector((state: any) => state.student?.lastName);
  const userImage = useSelector((state: any) => state.student?.image);
  return (
    <>
      {drop && <DropDown />}
      <header className="w-full h-[60px]  flex justify-center items-center">
        <header className="w-full h-[60px] z-[500] bg-white shadow-md max-sm:bg-gradient-to-tr from-green-400 via-green-600 to-green-700 flex flex-col   items-center justify-center fixed">
          <header className="w-[97%] flex items-center justify-between ">
            <header className="max-sm:hidden">
              <Link to="/auth">
                <FaBookOpenReader className="text-4xl hover:cursor-pointer" />
              </Link>
            </header>
            <header className="hidden max-sm:flex items-center justify-between ">
              <img
                src={userImage}
                alt=""
                className="w-[50px] h-[50px] rounded-full border mr-2 object-cover"
              />
              <div className="leading-none max-sm:text-white">
                <div className="text-[12px] flex items-center ">
                  Welcome back <div className="text-sm">🎉</div>
                </div>
                <div className="flex items-center">
                  <div className="font-bold">{userFirst}</div>
                  <div className="font-bold ml-1">{userLast}</div>
                </div>
              </div>
            </header>
            <Profile />
            <header className="hidden max-md:block max-sm:text-white">
              <RiMenu3Fill
                className="text-2xl hover:cursor-pointer hover:scale-125 transition-all duration-300"
                onClick={() => {
                  dispatch(dropped());
                }}
              />
            </header>
          </header>
        </header>
      </header>
    </>
  );
};

export default Header;
