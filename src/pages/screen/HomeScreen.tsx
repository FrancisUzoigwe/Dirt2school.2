const HomeScreen = () => {
  return (
    <div className="w-full h-[100dvh]  flex flex-col items-center">
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
        <div className="font-[Ever] font-bold max-sm:flex hidden">Recent Histories</div>
      </div>
    </div>
  );
};

export default HomeScreen;
