import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";

type Seat = {
  number : number,
  status : number
}

type Row = {
  number : string,
  seats : [Seat]
}

type SeatState = [Row]

const Seats = () => {

    const {state} = useLocation();

    const [seats, setSeats] = useState<SeatState>([{number : "" , seats : [{number : 0, status : 0}]}]);

    useEffect(()=>{
      setSeats(state.seatConfiguration.rows);
      console.log(seats);
    },[]);

  return (
    <HomeLayout>
       {seats.length}
    </HomeLayout>
  );
};

export default Seats;