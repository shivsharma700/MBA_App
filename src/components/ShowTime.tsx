import TimeBox from "./TimeBox";

type MovieShows = {
  id: string, // show id
  timing: string,
  format: string,
  price: number,
  noOfSeats: number,
  seatConfiguration: string
}

function formatTime(timeString: string) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

const ShowTime = ({shows} : {shows : [MovieShows]}) => {
  return (
    <div className=" w-[70%] px-8 mt-6 " >
        <div className="time flex gap-4 flex-wrap">
          {
             shows.map((shows : MovieShows) => {
              return <TimeBox config={shows.seatConfiguration} price={shows.price} timing={formatTime((new Date(shows.timing).toLocaleTimeString()))} key={shows.id} />;
            })
          }
        </div>
        <div className="cancelable flex flex-row gap-2 items-center mt-4 ">
            <div className=" h-2 w-2 bg-[#ffc610] rounded-full " ></div>
            <div className="text-[13px] font-medium text-[#6c6c6c] " >Non-cancellable</div>
        </div>
    </div>
  );
};

export default ShowTime;