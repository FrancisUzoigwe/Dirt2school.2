import { useDispatch } from "react-redux";
import { detailToggle } from "../../global/globalState";

interface iStudent {
  name?: string;
  email?: string;
  price?: string;
}

export const Students: React.FC<iStudent> = ({ name, email, price }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="flex h-[180px] border  flex-col items-center justify-center rounded-lg bg-green-500  hover:cursor-pointer transition-all duration-300 "
        onClick={() => {
          dispatch(detailToggle());
        }}
      >
        <div className="w-[80px] h-[80px] rounded-full border ">
          <img
            src={""}
            alt="Image"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="font-bold text-white max-sm:text-[13px]">
          {name}Francis Uzoigwe
        </div>
        <div className="text-[12px] font-bold max-sm:text-[10px]">
          {email}kossyuzoigwe@gmail.com
        </div>
        <div className="font-bold text-white">₦{price}2000</div>
      </div>
    </>
  );
};
