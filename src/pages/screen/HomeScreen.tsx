import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import "../../scroll.css";
import { useDispatch, useSelector } from "react-redux";
import { MdCreditScore } from "react-icons/md";
import WithdrawScreen from "./WithdrawScreen";
import { cashedOut } from "../../global/globalState";

const Card = () => {
  const [close, setClose] = useState<boolean>(false);
  const onEye = () => {
    setClose(!close);
  };

  const dispatch = useDispatch();
  return (
    <div className="w-auto h-[200px] relative border  rounded-xl my-2 mx-1 bg-gradient-to-r from-black via-[#110f0f] to-[#1e1e1e]">
      <div className="m-4">
        <div className="relative">
          <div className="font-bold text-white text-2xl mt-2">Wallet:</div>
          <div
            className="absolute right-5 bottom-2 hover:cursor-pointer text-white"
            onClick={() => {
              onEye();
            }}
          >
            {!close ? (
              <div>
                <FaEye className=" text-white text-2xl hover:scale-110 transition-all duration-300" />
              </div>
            ) : (
              <div>
                <FaEyeSlash className="text-white text-2xl hover:scale-110 transition-all duration-300" />
              </div>
            )}
          </div>
          <div className="text-3xl text-white font-bold ml-3 hover:cursor-pointer  mt-2 flex ">
            ₦
            <span className="ml-1">
              {close ? <div>0.00 </div> : <div>****</div>}
            </span>
          </div>
        </div>
        <div
          className=" absolute bottom-5 left-10 flex-col flex items-center hover:cursor-pointer text-white hover:scale-110 transition-all duration-300"
          onClick={() => {
            dispatch(cashedOut());
          }}
        >
          <MdCreditScore className="text-2xl" />
          <div>Withdraw</div>
        </div>
      </div>
    </div>
  );
};
const CardI = () => {
  return (
    <div className="w-auto h-[200px] border text-black bg-gradient-to-r from-black via-[#110f0f] to-[#1e1e1e] rounded-xl my-2 mx-1 first-letter: ">
      <div className="m-4">
        <div className="font-bold text-2xl mt-2 text-white">Bags Brought:</div>
        <div className="text-3xl font-bold ml-3 hover:cursor-pointer text-white mt-2">
          0
        </div>
      </div>
    </div>
  );
};
const CardII = () => {
  const [price] = useState<number>(1000 || 2000 || 3000);
  const [history, setHistory] = useState<boolean>(false);
  console.log(typeof setHistory);

  const data = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  return (
    <div className="w-auto overflow-y-auto max-lg:hidden bg-gradient-to-r from-black via-[#110f0f] to-[#1e1e1e]  h-[200px] border border-black rounded-xl my-2 mx-1 flex-col flex  items-center z-[50]">
      <div className="w-full h-auto flex items-center justify-center  ">
        <div className="mt-5 font-bold underline hover:cursor-pointer fixed  font-Poppin text-white bg-black">
          Recent Histories
        </div>
      </div>
      <div className="mt-3 w-full justify-center items-center h-auto flex flex-col leading-none ">
        {history ? (
          <div className="flex flex-col items-center mt-20">
            <IoSettings className="text-white text-7xl max-sm:text-7xl animate-bounce  transition-all duration-100 max-sm:mt-3" />
            <div className=" text-white">Histories would appear here</div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-5 w-full">
            {data?.map(() => (
              <div className="w-[95%] h-[40px] mt-3 ">
                <div className="flex items-center justify-center text-[13px] text-white">
                  Brought <span className="mx-1">2</span> bags on
                  <div className="mx-1 underline font-bold">12-12-2023</div>
                  <div className="ml-1 font-bold">
                    ₦<span className="ml-1">{price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

const HomeScreen = () => {
  const cashout = useSelector((state: any) => state.cashout);
  const [price] = useState<number>(1000 || 2000 || 3000);

  const data = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  const [history, setHistory] = useState<boolean>(false);
  console.log(typeof setHistory);

  return (
    <>
      {cashout && <WithdrawScreen />}
      <div className="w-full max-sm:h-[100dvh] h-[100vh] text-black flex flex-col items-center">
        <div className="grid max-sm:hidden w-full grid-cols-3 gap-3 max-lg:grid-cols-2">
          <Card />
          <CardI />
          <CardII />
        </div>
        <div className="font-[Ever] max-sm:hidden text-2xl font-bold mt-4 text-white">
          Recent Histories
        </div>

        <div className="max-sm:flex hidden w-[96%] mt-3 h-auto items-center  justify-center">
          <div className="w-full">
            <Card />
          </div>
        </div>
        <div className="w-[96%] flex items-center justify-center flex-col mt-3 ">
          <div className="font-[Ever] font-bold max-sm:flex hidden text-black">
            Recent Histories
          </div>
          {history ? (
            <div className="flex flex-col items-center mt-5">
              <IoSettings className="text-9xl max-sm:text-8xl animate-bounce text-black transition-all duration-100 max-sm:mt-3" />
              <div className=" text-black">Histories would appear here</div>
            </div>
          ) : (
            <div className="w-full border overflow-y-auto rounded-xl h-[250px] overflow-hidden flex flex-col">
              {data?.map(() => (
                <div className="w-[95%] h-[40px] mt-3 flex flex-col pl-4">
                  <div className="flex items-center justify-center text-[20px] max-sm:text-[11px]">
                    Brought <span className="mx-1">2</span> bags of pet bottle
                    on
                    <div className="mx-1 underline text-black font-bold">
                      12-12-2023
                    </div>
                    <div className="mx-1">credit</div>
                    <div className="ml-1 font-bold">
                      ₦<span className="ml-1">{price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
