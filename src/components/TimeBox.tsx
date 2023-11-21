import { useNavigate } from "react-router-dom";

import processSeatConfig from "../Utils/processSeatConfig";

const TimeBox = ({config, price, timing} : {config: string, price : number, timing : string}) => {

  const seatConfiguration = processSeatConfig(config);
  
  const navigate = useNavigate();

  function onShowSelection(){
    if(config) navigate("/seats", {state : {seatConfiguration}});
  }

    return (
    <div onClick={onShowSelection} className=" relative group cursor-pointer w-[7.2rem] h-[2.5rem] rounded-[4px] flex justify-center items-center border border-[#999] text-xs text-[#4abd5d] " >
       {timing}
       <div className="w-[9rem] rounded bg-[#fff] shadow-md h-[4rem] border  absolute bottom-[100%] mb-[1rem] hidden group-hover:block text-black " >
          <div className="flex flex-col mt-3 justify-center items-center" >
            <div className=" text-[15px] " >RS. {price}</div>
            <div className=" text-[9px] ">EXECUTIVE</div>
            <div className=" text-slate-400 ">Available</div>
          </div>
       </div>
    </div>
  );
};

export default TimeBox;