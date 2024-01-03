import { useSelector } from "react-redux";
import { Students } from "./AdminStudents";
import AdminDetailedScreen from "./AdminDetailedScreen";

const AdminScreen = () => {
  const detail = useSelector((state: any) => state.detail);
  return (
    <>
      {detail && <AdminDetailedScreen />}
      <div className="grid grid-cols-4 gap-2 mt-3">
        <Students />
      </div>
    </>
  );
};

export default AdminScreen;
