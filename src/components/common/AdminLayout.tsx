import { Outlet } from "react-router-dom";
import AdminHeader from "../static/AdminHeader";
import AdminSider from "../static/AdminSider";

const AdminLayout = () => {
  return (
    <div className="w-full min-h-[100vh] flex">
      <div className="w-full">
        <AdminHeader />
        <div className="flex w-full h-full justify-between ">
          <div className="w-[150px]  bg-red-400">
            <AdminSider />
          </div>
          <div className="bg-purple-400 w-full px-[2px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
