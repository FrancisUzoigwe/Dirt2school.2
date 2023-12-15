import { FaBookOpenReader } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="w-full h-[60px]  flex justify-center items-center">
      <header className="w-full h-[60px] bg-gray-500  flex items-center justify-center fixed">
        <header className="w-[97%] flex items-center justify-between ">
          <header>
            <FaBookOpenReader className="text-4xl hover:cursor-pointer" />
          </header>
          <div>
            <header className=" flex items-center justify-between max-md:hidden">
              <img
                src=""
                alt=""
                className="w-[50px] h-[50px] rounded-full border"
              />
              <div className=" ml-2">
                <div className="font-bold">Francis Uzoigwe</div>
                <div className="text-[13px]">Afara Technical School</div>
              </div>
            </header>
          </div>
          <header className="hidden max-md:block">
            <RiMenu3Fill className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-125"/>
          </header>
        </header>
      </header>
    </header>
  );
};

export default Header;
