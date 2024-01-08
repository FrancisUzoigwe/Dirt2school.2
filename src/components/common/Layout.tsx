import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";
import { useSelector } from "react-redux";
import { IoCallSharp } from "react-icons/io5";

const Layout = () => {
  const uToggle = useSelector((state: any) => state.uToggle);
  return (
    <div>
      <Header />
      <div className="w-full h-auto  justify-between flex">
        <div
          className={`${
            !uToggle ? "w-[150px]" : "w-[60px]"
          }  h-full max-md:hidden`}
        >
          <Sider />
        </div>

        <div className="w-full h-auto bg-white flex items-center justify-center">
          <div className="fixed h-[20%] w-[90%] flex items-end justify-center mt-10">
            <div className="hidden max-sm:flex   w-full justify-end  ">
              <div className="bg-green-400 px-3 py-3 rounded-full animate-bounce hover:cursor-pointer hover:animate-none">
                <IoCallSharp className="text-2xl text-white " />
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
