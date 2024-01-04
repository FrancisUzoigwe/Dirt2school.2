// import { useDispatch } from "react-redux";
import { changedDetailToggle } from "../../global/globalState";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
const AdminDetailedScreen = () => {
  const detailedVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 }, opacity: 1 },
  };

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const config: any = {
    reference: new Date().getTime().toString(),
    email: "kossyuzoigwe@gmail.com",
    amount: 20000,
    publicKey: "pk_live_94202d87146f507395f1045612cc6d0ec3a4fd29",
  };

  const onSuccess = (reference: any) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  // const PaystackHookExample = () => {
  const initializePayment: any = usePaystackPayment(config);

  return (
    <div
      className="fixed top-0 left-0 h-full flex justify-center items-center w-full "
      style={{ backdropFilter: "blur(4px)" }}
    >
      <motion.div
        variants={detailedVariant}
        initial="hidden"
        animate="visible"
        className="text-right w-[80%] h-[auto] mt-7 rounded-lg bg-green-600 flex justify-between relative"
      >
        <div
          className=" top-3 right-3 hover:cursor-pointer absolute"
          // onClick={() => {
          //   dispatch(changedDetailToggle());
          // }}
          onClick={() => {
            navigate("/adminroute");
          }}
        >
          <IoCloseSharp className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-125" />
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="w-[100px] h-[100px] border rounded-full bg-white mt-2">
            <img
              src=""
              alt=""
              className="w-full h-full rounded-full object-cover "
            />
          </div>
          <div className="text-3xl font-bold text-white mt-5">
            Francis Kossyrisochukwu Uzoigwe
          </div>
          <div className="text-white font-bold">kossyuzoigwe@gmail.com</div>
          <div className="w-[50%] flex flex-col  ">
            <div className="flex items-center justify-between  w-full">
              <div className="text-white">
                <div className="flex justify-start font-bold">Bags:</div>
                <div className="text-base font-bold justify-start flex">2</div>
              </div>
              <div className="text-white">
                <div className="flex justify-start font-bold">Wallet:</div>
                <div className="text-base font-bold justify-start flex">
                  ₦2,000
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between my-2 w-full">
              <div className="text-white">
                <div className="flex justify-start font-bold">Phone:</div>
                <div className="text-base font-bold justify-start flex">
                  07047474886
                </div>
              </div>
              <div className="text-white">
                <div className="flex justify-start font-bold">Address:</div>
                <div className="text-base font-bold justify-start flex">
                  96B Ago-Hausa street
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between my-2 w-full">
              <div className="text-white">
                <div className="flex justify-start font-bold">School:</div>
                <div className="text-base font-bold justify-start flex">
                  Afara Technical Secondary School
                </div>
              </div>
              <div className="text-white flex flex-col">
                <div className="flex justify-start font-bold">Class:</div>
                <div className="text-base font-bold justify-start flex">
                  SSS1B
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between my-2 w-full">
              <div className="text-white">
                <div className="flex justify-start font-bold">Account No.:</div>
                <div className="text-base font-bold justify-start flex">
                  7047474886
                </div>
              </div>
              <div className="text-white flex flex-col">
                <div className="flex justify-start font-bold">
                  Account Name:
                </div>
                <div className="text-base font-bold justify-start flex">
                  Francis Uzoigwe
                </div>
              </div>
            </div>
          </div>
          <button
            className="my-3 px-4 py-2 rounded-md bg-white text-green-400"
            onClick={() => {
              initializePayment(onSuccess, onClose);
            }}
          >
            Credit Account
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDetailedScreen;
