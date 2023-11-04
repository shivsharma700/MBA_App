import BuyTicketDivider from "./BuyTicketDivider";
import ShowTime from "./ShowTime";
import TheatreName from "./TheatreName";

const Show = () => {
  return (
    <>
     <div className="show flex flex-row p-4 ">
        <TheatreName/>
        <ShowTime/>
    </div>
    <BuyTicketDivider/>
    </>
  );
};

export default Show;