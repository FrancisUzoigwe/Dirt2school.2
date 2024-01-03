import { useDispatch } from "react-redux";
import { changedDetailToggle } from "../../global/globalState";

const AdminDetailedScreen = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed top-0 left-0 h-full flex flex-col justify-center items-center w-full "
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div
        className="text-right my-4 hover:cursor-pointer"
        onClick={() => {
          dispatch(changedDetailToggle());
        }}
      >
        Cancel
      </div>
      <div className="text-right">AdminDetailedScreen</div>
    </div>
  );
};

export default AdminDetailedScreen;
