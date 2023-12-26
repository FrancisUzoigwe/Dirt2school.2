// import img from "../../assets/Children.webp";

const AboutUsScreen = () => {
  return (
    <>
      <br />
      <div id="aboutus" className="w-full flex items-center justify-center">
        <div className="w-[90%] flex items-center justify-between max-sm:flex-col-reverse">
          {/* <div className="w-[50%] max-sm:w-[100%]">
            <img src={img} alt="image" className="w-[100%] " />
            </div> */}

          <div className="w-[100%] max-sm:w-[100%] flex items-center justify-center flex-col">
            <h2 className="text-[30px] flex max-sm:text-[24px] max-md:text-[26px] font-bold ">
              About Us
            </h2>
            <br />
            <p className="w-[80%] max-sm:w-[100%] max-md:w-[100%] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              corporis illum exercitationem autem cumque iste nisi culpa velit
              blanditiis non modi reiciendis in labore sed, rerum veniam atque
              accusantium architecto..
            </p>
            <br />
            <p className="w-[80%] max-sm:w-[100%] max-md:w-[100%] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              corporis illum exercitationem autem cumque iste nisi culpa velit
              blanditiis non modi reiciendis in labore sed, rerum veniam atque
              accusantium architecto..
            </p>

            <br />
            <div className="flex ">
              <button
                className="w-[160px] rounded-[3px] relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-lime-500 before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black border-[1px]
        border-[] bg-[whitesmoke]

        px-2 h-10 text-[13px] font-max-md max-sm:hidden"
              >
                Get in touch with us
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default AboutUsScreen;
