import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

const Card = () => {
  const [close, setClose] = useState<boolean>(false);
  const onEye = () => {
    setClose(!close);
  };

  return (
    <div className="w-auto h-[250px] border rounded-xl my-2 mx-1 first-letter: ">
      <div className="m-4">
        <div className="relative">
          <div className="font-[Zah] text-white text-3xl mt-2">
            Total Amount:
          </div>
          <div
            className="absolute right-5 bottom-2 hover:cursor-pointer text-white"
            onClick={() => {
              onEye();
            }}
          >
            {close ? (
              <div>
                <FaEye className="text-3xl hover:scale-110 transition-all duration-300" />
              </div>
            ) : (
              <div>
                <FaEyeSlash className="text-3xl hover:scale-110 transition-all duration-300" />
              </div>
            )}
          </div>
          <div className="text-5xl font-bold ml-3 hover:cursor-pointer text-white mt-2 flex ">
            ₦
            <span className="ml-1">
              {close ? <div>0.00 </div> : <div>****</div>}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const CardI = () => {
  return (
    <div className="w-auto h-[250px] border rounded-xl my-2 mx-1 first-letter: ">
      <div className="m-4">
        <div className="font-[Zah] text-white text-3xl mt-2">Bags Brought:</div>
        <div className="text-5xl font-bold ml-3 hover:cursor-pointer text-white mt-2">
          0
        </div>
      </div>
    </div>
  );
};
const CardII = () => {
  const [price] = useState<number>(1000 || 2000 || 3000);
  const [history, setHistory] = useState<boolean>(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  return (
    <div className="w-auto overflow-y-auto max-lg:hidden h-[250px] border rounded-xl my-2 mx-1 flex-col flex  items-center ">
      <div className="w-full h-auto flex items-center justify-center">
        <div
          className="mt-5 font-bold underline hover:cursor-pointer fixed text-white font-Poppin"
          style={{ backdropFilter: "blur(20px)" }}
        >
          Recent Histories
        </div>
      </div>
      <div className="mt-3 w-full justify-center items-center h-auto flex flex-col leading-none ">
        {!history ? (
          <div className="flex flex-col items-center mt-20">
            <IoSettings className="text-7xl max-sm:text-7xl animate-bounce text-white transition-all duration-100 max-sm:mt-3" />
            <div className=" text-white">Histories would appear here</div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-5 w-full">
            {data?.map(() => (
              <div className="w-[95%] h-[40px] mt-3 ">
                <div className="flex items-center text-[13px]">
                  Brought <span className="mx-1">2</span> bags on
                  <div className="mx-1 underline text-white font-bold">
                    12-12-2023
                  </div>
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
  const [mobileClose, setMobileClose] = useState<boolean>(false);
  const onMobile = () => {
    setMobileClose(!mobileClose);
  };

  const [price] = useState<number>(1000 || 2000 || 3000);

  const data = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  const [history, setHistory] = useState<boolean>(false);
  return (
    <div className="w-full max-sm:h-[100dvh] h-[calc(100vh-60px)]  flex flex-col items-center">
      <div className="grid max-sm:hidden w-full grid-cols-3 gap-3 max-lg:grid-cols-2">
        <Card />
        <CardI />
        <CardII />
      </div>
      <div className="font-[Ever] max-sm:hidden text-2xl font-bold mt-4 text-white">
        Recent Histories
      </div>

      <div className="max-sm:flex hidden w-[96%] mt-3 h-auto items-center  justify-center">
        <div className="w-full h-[200px] border rounded-xl">
          <div className="ml-5 mt-5">
            <div className=" font-[Zah] text-white">Total Balance</div>
            <div className="text-5xl font-bold ml-2 text-white flex items-center">
              ₦
              <span className="ml-1">
                {mobileClose ? <div>0.00</div> : <div>****</div>}
              </span>
            </div>
            <div
              className="ml-5"
              onClick={() => {
                onMobile();
              }}
            >
              {!mobileClose ? (
                <FaEye className="text-3xl hover:scale-110 transition-all duration-300 hover:cursor-pointer text-white" />
              ) : (
                <FaEyeSlash className="text-3xl hover:scale-110 transition-all duration-300 hover:cursor-pointer text-white" />
              )}
            </div>
          </div>
          {/* <div className="mt-5 flex justify-end">
            <div className="flex justify-end flex-col mr-5">
              <div>Bags:</div>
              <div>0</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-[96%] flex items-center justify-center flex-col mt-3 ">
        <div className="font-[Ever] font-bold max-sm:flex hidden text-white">
          Recent Histories
        </div>
        {!history ? (
          <div className="flex flex-col items-center mt-5">
            <IoSettings className="text-9xl max-sm:text-7xl animate-bounce text-white transition-all duration-100 max-sm:mt-3" />
            <div className=" text-white">Histories would appear here</div>
          </div>
        ) : (
          <div className="w-full border overflow-y-auto rounded-xl h-[250px] flex flex-col">
            {data?.map(() => (
              <div className="w-[95%] h-[40px] mt-3 flex flex-col items-center">
                <div className="flex items-center text-[20px] max-sm:text-[11px]">
                  Brought <span className="mx-1">2</span> bags of pet bottle on
                  <div className="mx-1 underline text-white font-bold">
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
  );
};

export default HomeScreen;
