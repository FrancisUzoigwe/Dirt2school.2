import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";
import { useSelector } from "react-redux";
import { MdAccountCircle, MdDashboard, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

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
        <div className="w-full h-auto bg-green-400 pl-1 flex items-center justify-center">
          <div className="fixed bottom-20 max-sm:flex hidden w-[50%] border bg-white h-[60px] rounded-full items-center justify-around">
            <Link to="/">
              <div className="px-2 py-2 rounded-full bg-blue-600 text-white">
                <MdDashboard className="text-2xl" />
              </div>
            </Link>
            <Link to="/profile">
              <div className="px-2 py-2 rounded-full bg-blue-600 text-white">
                <MdAccountCircle className="text-2xl" />
              </div>
            </Link>
            <Link to="/settings">
              <div className="px-2 py-2 rounded-full bg-blue-600 text-white">
                <MdSettings className="text-2xl" />
              </div>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
