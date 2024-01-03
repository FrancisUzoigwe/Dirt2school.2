import { Outlet } from "react-router-dom";
import AdminHeader from "../static/AdminHeader";
import AdminSider from "../static/AdminSider";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const adminTog = useSelector((state: any) => state.aToggle);
  return (
    <div className="w-full min-h-[100vh] flex">
      <div className="w-full">
        <AdminHeader />
        <div className="flex w-full h-full justify-between ">
          <div className={`${adminTog ? "w-[150px]" : "w-[80px]"} bg-green-400`}>
            <AdminSider />
          </div>
          <div className="bg-green-300 w-full px-[2px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
