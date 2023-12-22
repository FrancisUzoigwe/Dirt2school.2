
const ProfileScreen = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center">
      <div className="max-sm:flex hidden w-[95%] h-full justify-center" >
        <div className="w-full h-full  mt-2 rounded-lg flex flex-col items-center " >
          <div className="flex flex-col items-center w-full" 
          // style={{backgroundImage:  `url(${waves})`, backgroundRepeat: "no-repeat", width: "100%", height: "100%"}}
          >
            <div className="flex flex-col items-center w-full">
              <div className="w-[100px] h-[100px] rounded-full border border-gray-400 bg-white mt-2">
                <img src="" alt="" className="w-full h-full rounded-full"/>
              </div>
              <div className="font-bold my-1 text-white">Kossyrisochukwu Francis Uzoigwe</div>
              <div className="text-[12px] font-bold text-gray-400 pb-5">kossyuzoigwe@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
