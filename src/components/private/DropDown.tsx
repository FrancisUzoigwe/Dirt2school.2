import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changedDrop } from "../../global/globalState";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        className="fixed top-2 right-0 w-full h-[200px] flex justify-center items-center z-[600]"
        // style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="w-[98%] h-full bg-white rounded-md flex flex-col items-center">
          <div className="mt-3">
            <AiOutlineClose
              className="text-2xl hover:scale-125 transition-all duration-300"
              onClick={() => {
                dispatch(changedDrop());
              }}
            />
          </div>
          <Link to="/auth/profile">
            <div className="my-2 hover:scale-105 transition-all duration-300">
              Profile
            </div>
          </Link>
          <Link to="/auth/settings">
            <div className="my-2 hover:scale-105 transition-all duration-300">
              Settings
            </div>
          </Link>
          <Link to="/auth">
            <div className="my-2 hover:scale-105 transition-all duration-300">
              Dashboard
            </div>
          </Link>
          <div className="my-2 hover:scale-105 transition-all duration-300">
            Logout
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DropDown;
