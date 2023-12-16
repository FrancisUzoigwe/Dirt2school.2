import { FaBookOpenReader } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[60px]  flex justify-center items-center">
      <header className="w-full h-[60px] bg-white max-sm:bg-gradient-to-tr from-green-400 via-green-600 to-green-700 flex flex-col   items-center justify-center fixed">
        <header className="w-[97%] flex items-center justify-between ">
          <header className="max-sm:hidden">
            <Link to="/">
              <FaBookOpenReader className="text-4xl hover:cursor-pointer" />
            </Link>
          </header>
          <header className="hidden max-sm:flex items-center justify-between ">
            <img
            // src={vite}
              alt=""
              className="w-[50px] h-[50px] rounded-full border mr-2 object-cover"
            />
            <div className="leading-none max-sm:text-white">
              <div className="text-[12px] flex items-center ">
                Welcome back <div className="text-sm">🎉</div>
              </div>
              <div className="font-bold">Francis Uzoigwe</div>
            </div>
          </header>
          <div>
            <header className=" flex items-center justify-between max-md:hidden">
              <img
                // src={vite}
                alt=""
                className="w-[50px] h-[50px] rounded-full border object-cover"
              />
              <div className=" ml-2 leading-tight">
                <div className="font-bold">Francis Uzoigwe</div>
                <div className="text-[13px]">Afara Technical School</div>
              </div>
            </header>
          </div>
          <header className="hidden max-md:block max-sm:text-white">
            <RiMenu3Fill className="text-2xl hover:cursor-pointer transition-all duration-300 hover:scale-125" />
          </header>
        </header>
      </header>
    </header>
  );
};

export default Header;
