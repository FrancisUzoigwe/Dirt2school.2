import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changedDrop, logOutStudent } from "../../global/globalState";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DropDown = () => {
  const dispatch = useDispatch();
  const resetVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 }, opacity: 1 },
  };
  return (
    <>
      <motion.div
        variants={resetVariant}
        initial="hidden"
        animate="visible"
        className="fixed top-2  right-0 w-full h-[200px] flex justify-center items-center z-[600]"
      >
        <div className="w-[98%] h-full shadow-xl bg-white rounded-md flex flex-col items-center relative">
          <div className="mt-3 absolute  top-0 right-2">
            <AiOutlineClose
              className="text-2xl hover:scale-125 transition-all duration-300  hover:cursor-pointer font-bold "
              onClick={() => {
                dispatch(changedDrop());
              }}
            />
          </div>
          <div className="my-3"></div>
          <Link to="/auth/profile">
            <div
              className="my-2 font-bold hover:scale-105 transition-all duration-300"
              onClick={() => {
                dispatch(changedDrop());
              }}
            >
              Profile
            </div>
          </Link>
          <Link to="/auth/settings">
            <div
              className="my-2 font-bold hover:scale-105 transition-all duration-300"
              onClick={() => {
                dispatch(changedDrop());
              }}
            >
              Settings
            </div>
          </Link>
          <Link to="/auth">
            <div
              className="my-2 font-bold hover:scale-105 transition-all duration-300"
              onClick={() => {
                dispatch(changedDrop());
              }}
            >
              Dashboard
            </div>
          </Link>
          <div
            className="my-2 font-bold hover:scale-105 transition-all z-[100] duration-300  hover:cursor-pointer"
            onClick={() => {
              Swal.fire({
                text: "This should take a second",
                icon: "success",
                timer: 5000,
                timerProgressBar: true,
              }).then(() => {
                dispatch(logOutStudent());
                dispatch(changedDrop());
              });
            }}
          >
            Logout
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DropDown;
