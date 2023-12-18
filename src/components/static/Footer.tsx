import { FiClock } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="contact" className="w-full py-4 flex items-center justify-center bg-green-800 text-white">
      <div className="w-[90%] h-[100%] flex items-center flex-wrap">
        
        <div className="flex w-[100%] justify-between  small:gap-2">
       
       <div className="small:w-[80%] small:flex-row-reverse lg:flex gap-4 ">
       <div className="flex items-center text-[22px] medium:mb-2 small:mb-2 hover:cursor-pointer hover:scale-[1.02] hover:text-[#e2e0e0] transition-all duration-300">
            <FiClock/>
            <p className="ml-2 text-[13px] medium:text-[11px] ">9:00AM-6:00PM</p>
          </div>
          <div className="flex items-center text-[22px] medium:mb-2 small:mb-2 hover:cursor-pointer hover:scale-[1.02] hover:text-[#e2e0e0] transition-all duration-300">
            <MdOutlinePhoneInTalk/>
            <p className="ml-2 text-[13px] medium:text-[11px]">+234 8131827885</p>
          </div>
          <div className="flex items-center text-[22px] medium:mb-2 small:mb-2 hover:cursor-pointer hover:scale-[1.02] hover:text-[#e2e0e0] transition-all duration-300">
            <CiMail/>
            <p className="ml-2 text-[13px]  medium:text-[11px] ">dirth2sch@gmail.com</p>
          </div>
          <div className="flex items-center text-[22px] medium:mb-2 small:mb-2 hover:cursor-pointer hover:scale-[1.02] hover:text-[#e2e0e0] transition-all duration-300">
            <CiLocationOn/>
            <p className="ml-2 text-[13px] medium:text-[11px] ">Codelab campus,31 haruna street,olodi-apapa,Lagos</p>
          </div>
       </div>

          <div className="flex gap-4 text-[24px] medium:text-[24px] medium:gap-3 ">
          <p><FaSquareFacebook/></p>
          <p><FaSquareXTwitter/></p>
          <p><FaLinkedin/></p>
          <p><FaSquareInstagram/></p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer