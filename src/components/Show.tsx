import BuyTicketDivider from "./BuyTicketDivider";
import ShowTime from "./ShowTime";
import TheatreName from "./TheatreName";

type MovieShows = {
  id: string, // show id
  timing: string,
  format: string,
  price: number,
  noOfSeats: number,
  seatConfiguration: string
}

const Show = ({name , shows} : {name : string, shows : [MovieShows]}) => {
  return (
    <>
     <div className="show flex flex-row p-4 ">
        <TheatreName theatreName={name} />
        <ShowTime shows={shows} />
    </div>
    <BuyTicketDivider/>
    </>
  );
};

export default Show;