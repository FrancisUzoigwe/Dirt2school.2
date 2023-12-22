import { useState } from "react";
import { Link } from "react-scroll/modules";
import { NavLink } from "react-router-dom";
import Menue from "./Menue";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {

    if (window.scrollY >= 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", onShow);

  return (
    <div>
      {show ? (
        <div className="w-full h-[70px] fixed flex items-center justify-center z-20  text-black bg-white">
          <div className="w-[90%] h-[100%] flex items-center justify-center z-20 ">
            <div className="flex w-[100%] h-[100%] justify-between items-center">
              <div className="">Waste</div>


              <div className="flex gap-10 medium:gap-6 md:text-[14px] sm:text-[14px] text-[16px] small:hidden">
                <Link to="home"
                 activeClass="active"
                 smooth={true}
                 offset={-50}
                 duration={500}
                >
                  <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Home</nav>
                </Link>
                <Link to="aboutus"
                 activeClass="active"
                 smooth={true}
                 offset={-300}
                 duration={500}
                >
                  <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">About Us</nav>
                </Link>
                <Link to="services"
                 activeClass="active"
                 smooth={true}
                 offset={-100}
                 duration={500}
                >
                  <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Services</nav>
                </Link>
                <Link to="company"

                  activeClass="active"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >

                  <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Company</nav>

                </Link>
                <Link
                  to="blog"
                  activeClass="active"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >

                  <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Blog</nav>
                </Link>
                <Link
                  to="contact"
                   activeClass="active"

                  smooth={true}
                  // offset={50}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">

                    Contact</nav>

                </Link>
              </div>
              <NavLink to="register">
                <button
                  className="w-[120px] rounded-[3px] relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
                overflow-hidden before:transition-transform
                before:duration-[1s] ease-in-out text-white before:bg-lime-500 before:absolute
                before:top-0 before:left-0 before:w-full before:h-full
                transition-colors duration-[1s] before:z-[-1] z-[1]
                hover:text-black border-[1px]
                border-[] bg-[whitesmoke]

                px-2 h-10 text-[13px] font-medium small:hidden"

                >
                  Get Started
                </button>
              </NavLink>


              <div className="hidden  mt-[220px] small:block">

                <Menue />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[70px] fixed flex items-center justify-center z-20  text-white bg-transparent">

        <div className="w-[90%] h-[100%] flex items-center justify-center z-20 ">
          <div className="flex w-[100%] h-[100%] justify-between items-center">
            <div className="">Waste</div>

            <div className="flex gap-10 medium:gap-6 md:text-[14px] sm:text-[14px] text-[16px] small:hidden">
              <Link to="home"
               activeClass="active"
               smooth={true}
               offset={-50}
               duration={500}
              >
                <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Home</nav>
              </Link>
              <Link to="aboutus"
               activeClass="active"
               smooth={true}
               offset={-300}
               duration={500}
              >
                <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">About Us</nav>
              </Link>
              <Link to="services"
               activeClass="active"
               smooth={true}
               offset={-100}
               duration={500}
              >
                <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Services</nav>
              </Link>
              <Link to="company"
                activeClass="active"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Company</nav>
              </Link>
              <Link
                to="blog"
                activeClass="active"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">Blog</nav>
              </Link>
              <Link
                to="contact"
                 activeClass="active"
                smooth={true}
                // offset={50}
                duration={500}
              >
                <nav className="hover:cursor-pointer hover:text-lime-400 transition-all duration-300">
                  Contact</nav>
              </Link>
            </div>
            <NavLink to="register">
              <button
                className="w-[120px] rounded-[3px] relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]

              overflow-hidden before:transition-transform
              before:duration-[1s] ease-in-out text-black before:bg-[white] before:absolute
              before:top-0 before:left-0 before:w-full before:h-full
              transition-colors duration-[1s] before:z-[-1] z-[1]
              hover:text-white border-[1px]
              border-[] bg-lime-500

              px-2 h-10 text-[13px] font-medium small:hidden"
              >
                Get Started
              </button>
            </NavLink>

            <div className="hidden  mt-[220px] small:block">
              <Menue />
            </div>
          </div>
        </div>
      </div>

      )}
    </div>
  );
};
// ml-[128px]
export default Header;
