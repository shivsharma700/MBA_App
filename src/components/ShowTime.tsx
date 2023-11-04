import TimeBox from "./TimeBox";

const ShowTime = () => {
  return (
    <div className=" w-[70%] px-8 mt-6 " >
        <div className="time flex gap-4 flex-wrap">
            <TimeBox time="10:00 AM" />
            <TimeBox time="01:05 PM" />
            <TimeBox time="04:10 PM" />
            <TimeBox time="05:20 PM" />
            <TimeBox time="07:15 PM" />
            <TimeBox time="08:20 PM" />
            <TimeBox time="10:20 PM" />
        </div>
        <div className="cancelable flex flex-row gap-2 items-center mt-4 ">
            <div className=" h-2 w-2 bg-[#ffc610] rounded-full " ></div>
            <div className="text-[13px] font-medium text-[#6c6c6c] " >Non-cancellable</div>
        </div>
    </div>
  );
};

export default ShowTime;