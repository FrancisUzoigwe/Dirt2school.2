import { MdDashboard } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userChangedToggled, userToggled } from "../../global/globalState";
import { useState } from "react";

const Sider = () => {
  const [side, setSide] = useState<boolean>(false);
  const onSide = () => {
    setSide(!side);
  };
  const dispatch = useDispatch();
  const uToggle = useSelector((state: any) => state.uToggle);
  return (
    <div
      className={`${
        !uToggle ? "w-[150px]" : "w-[60px]"
      } h-[calc(100vh-60px)] flex justify-center`}
    >
      <div className="w-[150px] h-full flex flex-col items-center fixed ">
        <div
          className={`${
            !uToggle ? "w-[150px]" : "w-[60px]"
          }  h-[calc(100vh-60px)] flex flex-col items-center`}
        >
          <div className="mt-3">
            <div
              onClick={() => {
                onSide();
              }}
            >
              {!side ? (
                <MdDashboard
                  className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-[1.2]"
                  onClick={() => {
                    dispatch(userChangedToggled());
                  }}
                />
              ) : (
                <MdDashboard
                  className="text-3xl hover:cursor-pointer transition-all duration-300 hover:scale-[1.2]"
                  onClick={() => {
                    dispatch(userToggled());
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
