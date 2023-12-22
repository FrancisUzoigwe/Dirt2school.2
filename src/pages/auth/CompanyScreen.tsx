import img from "../../assets/Children.webp"

const CompanyScreen = () => {
  return (
    <div id="company" className="w-full flex items-center justify-center">

        <div className="w-[90%] flex items-center justify-between small:flex-col-reverse">
            <div className="w-[50%] small:w-[100%]">
                <h2 className="text-[30px] small:text-[24px] medium:text-[26px] font-bold">Our Commitment</h2>
                <br/>
                <p className="w-[80%] small:w-[100%] medium:w-[100%]">Focused on improving the quality of life through proper efficient waste disposal,Dirt to school aim at using recycled plastic to send students to school through our service.</p>

                <br/>
                <button
                  className="w-[160px] rounded-[3px] relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-lime-500 before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black border-[1px]
        border-[] bg-[whitesmoke]

        px-2 h-10 text-[13px] font-medium small:hidden"

                >
                  send us a message
                </button>
            </div>

            <div className="w-[50%] small:w-[100%]">

            <img src={img} alt="image" className="w-[100%] " />
            </div>
        </div>
    </div>
  )
}

export default CompanyScreen