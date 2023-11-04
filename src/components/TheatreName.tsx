import {CiHeart} from "react-icons/ci";
import {IoFastFoodOutline} from "react-icons/io5";
import {LiaInfoCircleSolid} from "react-icons/lia";
import {TfiMobile} from "react-icons/tfi";

const TheatreName = () => {
  return (
    <div className=" w-[30%] " >
        <div className="firstRow flex flex-row  items-center ">
            <CiHeart className=" text-2xl text-pink-400 mr-4 mt-1 " />
            <div className="name text-center font-semibold text-sm ">INOX: Dhillon Plaza (Zirakpur)</div>
            <div className="info ml-[4rem] flex flex-row gap-1 justify-center items-center font-semibold text-xs  text-slate-400 ">
                <LiaInfoCircleSolid className="text-lg" />
                <span className="text-[0.7rem]">INFO</span>
            </div>
        </div>
        <div className="secondRow ml-10 mt-4 flex flex-row gap-6 items-center ">
            <div className="flex flex-row items-center gap-1 text-[#49ba8e] " >
                 <TfiMobile className="text-xl" />
                 <span className="text-xs font-medium " >M-Ticket</span> 
            </div>
            <div className="flex flex-row items-center gap-1 text-[#ffa426] " >
                 <IoFastFoodOutline className="text-xl " />
                 <span className="text-xs font-medium " >Food & Beverage</span> 
            </div>
        </div>
    </div>
  );
};

export default TheatreName;