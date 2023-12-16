import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

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
  return (
    <div className="w-auto max-lg:hidden h-[250px] border rounded-xl my-2 mx-1 first-letter: ">
      <div>History</div>
    </div>
  );
};

const HomeScreen = () => {
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
            <div className="text-5xl font-bold ml-2 text-white">
              ₦<span className="ml-1">0.00</span>
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
      <div className="w-[96%] flex items-center justify-center flex-col mt-3">
        <div className="font-[Ever] font-bold max-sm:flex hidden">
          Recent Histories
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
