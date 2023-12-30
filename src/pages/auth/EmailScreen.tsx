import { IoMailUnread } from "react-icons/io5";
import image from "../../assets/Erased.png";
const EmailScreen = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-green-500 via-green-700 to-green-950">
        {/* Desktop View */}
        <div
          className="w-full h-full flex  "
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className="flex w-[95%] justify-center md:ml-10">
            <div className="mt-48 max-sm:mt-2 flex flex-col items-center">
              <div className="my-5">
                <IoMailUnread className="text-7xl text-white animate-pulse" />
              </div>
              <div className="max-sm:text-[15px] text-lg text-white font-bold text-center">
                A mail has been sent to your gmail, click on the provided link
                to get verified.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailScreen;
