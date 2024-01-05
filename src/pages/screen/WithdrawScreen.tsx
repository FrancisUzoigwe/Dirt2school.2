import { useDispatch } from "react-redux";
import { changeCashout } from "../../global/globalState";
import { motion } from "framer-motion";
const WithdrawScreen = () => {
  const dispatch = useDispatch();

  const cashVariant = {
    hidden: { opacity: 0, x: "200px" },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <div
      className="w-full h-screen top-0 left-0 right-0 fixed z-[100]  flex justify-center items-center text-black"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <motion.div
        variants={cashVariant}
        initial="hidden"
        animate="visible"
        className=""
        onClick={() => {
          dispatch(changeCashout());
        }}
      >
        Withdraw
      </motion.div>
    </div>
  );
};

export default WithdrawScreen;
