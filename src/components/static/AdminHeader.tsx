import { BiSearch } from "react-icons/bi";

const AdminHeader = () => {
  return (
    <>
      <div className="w-full flex h-[50px] justify-center items-center bg-white z-[600] relative">
        <div className="w-full h-[50px] items-center flex  justify-center  fixed bg-white">
          <div className="w-[95%] flex h-full justify-between items-center ">
            <div className="font-bold">Dirt2School</div>
            <div className="relative w-[20%] flex justify-between items-center">
              <input
                type="text"
                name=""
                id=""
                className="bg-green-400 outline-none h-[40px] w-full rounded-3xl pl-3 text-white placeholder:text-white "
                placeholder="Search by Email"
              />
              <div className="absolute right-0  px-1 py-1 rounded-full bg-green-400">
                <BiSearch className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
