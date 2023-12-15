import { Outlet } from "react-router-dom";
import AdminHeader from "../static/AdminHeader";
import AdminSider from "../static/AdminSider";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <div>
        <div>
          <AdminSider />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
