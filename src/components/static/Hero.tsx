import img from "../../assets/video (2160p).mp4"


const Hero = () => {
  return (
    <div id="home" className="w-full h-[600px] flex items-center justify-center relative">
        <div className="w-[90%] h-[100%] flex items-center justify-center">
            <video src={img} autoPlay loop muted
            className="absolute top-0 right-0 w-[100%] h-[100%] object-cover"/>
            <div className="absolute top-[40%] left-[5%] text-white ">
                <h2 className="text-[40px]   max-sm:w-[90%] max-sm:text-[28px] max-md:w-[70%] max-2xl:w-[70%] px-3 py-2  bg-slate-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 rounded-[3px]">Waste Management For A Cleaner Future And Better Education</h2>
                <br/>
                <div className="flex gap-8 small:gap-6">
                <button
          className="px-3 py-2  relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-lime-500 before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black rounded-[4px]
         bg-[whitesmoke]
        h-11 text-[13px] font-medium"
        >
          Explore Our Services
        </button>
        <button className="px-3 py-2 relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-black before:bg-white before:absolute rounded-[4px]
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black bg-[whitesmoke]
        h-11 text-[13px] font-medium max-sm:hidden">
          More about us
        </button>

        <button
          className="px-3 py-2 rounded-[4px] relative  justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-black before:bg-white before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-white border-[1px]
        border-[] bg-lime-500
         h-11 text-[13px] font-medium hidden small:block"
        >
          Get Started
        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero