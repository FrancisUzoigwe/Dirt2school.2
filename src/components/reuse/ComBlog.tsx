import React from "react";

export interface iBlog {
    imG?: any;
    title?: string;
    subtitle?: string;
  }

const ComBlog:React.FC<iBlog> = ({imG, title, subtitle}) => {
  return (
    <div className="min-w-[400px] h-[400px] flex my-[10px] flex-col items-center rounded-[3px] border cursor-pointer medium:min-w-[210px] small:w-[90%] ml-1">
        <img src={imG} alt="image" className="w-[100%] h-[65%]"/>
        <div className="w-[90%]">
            <div className="text-[18px] small:text-[15px] font-bold my-[10px] break-words text-[#3d3d3d]">{title}</div>
            <div className="text-[14px] small:text-[13px] break-words">{subtitle}</div>
        </div>
    </div>
  )
}

export default ComBlog