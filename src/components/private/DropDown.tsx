import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const DropDown = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const onDrop = () => {
    setDropDown(!dropDown);
  };
  return (
    <div
      className="flex flex-col items-center relative"
      onClick={() => {
        onDrop();
      }}
      //   onMouseEnter={onDrop} onMouseLeave={onDrop}
    >
      <RiMenu3Fill className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-125" />
      {dropDown ? (
        <Fade>
          <div className=" absolute top-7 right-6 px-6 py-2 bg-white rounded-xl text-black">
            <Link to="/">
              <div className="my-1">Home</div>
            </Link>
            <Link to="/profile">
              <div className="my-1">Profile</div>
            </Link>
            <Link to="/settings">
              <div className="my-1">Settings</div>
            </Link>
            <div className="my-1">Logout</div>
          </div>
        </Fade>
      ) : null}
    </div>
  );
};

export default DropDown;
