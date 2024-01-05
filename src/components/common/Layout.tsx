import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";
import { useSelector } from "react-redux";

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
        <div className="w-full h-auto bg-white  flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
