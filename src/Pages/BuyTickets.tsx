
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Show from "../components/Show";
import axiosInstance from "../Config/Axiosinstance";
import HomeLayout from "../Layouts/HomeLayout";

type MovieShows = {
  id: string, // show id
  timing: string,
  format: string,
  price: number,
  noOfSeats: number,
  seatConfiguration: string
}

type TheatreData = {
  id: string, // theatreId
  theatreName: string,
  shows: [MovieShows]
}

type theatre = {
  city: string,
  createdAt: string,
  updatedAt: string,
  movies: [string],
  name: string,
  owner: string,
  pincode: number,
  _v: number,
  _id: string
}

type show = {
  createdAt: string,
  format: string,
  movieId: string,
  noOfSeats: number,
  price: number,
  timing: string,
  updatedAt: string,
  _v: number,
  _id: string,
  theatreId: theatre,
  seatConfiguration: string
}

type TheatreState = {
  [key: string]: TheatreData
} ;

const BuyTickets = () => {

  const {state} = useLocation();
  const [theatreList , setTheatreList] = useState<TheatreState>({});
  const navigate = useNavigate();

  async function updateTheatreList() {
       try {
            const response = await axiosInstance.get(`mba/api/v1/shows?movieId=${state.movieId}`);
            const shows = response.data.data;
            console.log(shows);
            const showState : TheatreState = {};
            shows.map((show: show) => {
                if(show.theatreId._id in showState) {
                    showState[show.theatreId._id].shows.push({
                        id: show._id, // show id
                        timing: show.timing,
                        format: show.format,
                        price: show.price,
                        noOfSeats: show.noOfSeats,
                        seatConfiguration: show.seatConfiguration
                    });
                } else {
                    showState[show.theatreId._id] = {
                        id: show.theatreId._id, // theatreId
                        theatreName: show.theatreId.name,
                        shows: [{
                            id: show._id, // show id
                            timing: show.timing,
                            format: show.format,
                            price: show.price,
                            noOfSeats: show.noOfSeats,
                            seatConfiguration: show.seatConfiguration
                        }]
                    };
                }
            });
      
            // console.log(showState);
            setTheatreList(showState);
      
      
        } catch(error) {
            console.log(error);
        }
  }

  useEffect(()=>{
    updateTheatreList();
    if(!state || !state.movieName) navigate("/");
  },[]);

  return (
    <div className="buytickets min-h-[80vh]  bg-[#f2f2f2]" >
        <HomeLayout>

          <div className="bg-[#333545] text-white">
              <div className=" font-normal text-[2.4rem] pt-8 pb-6 w-[80vw] mx-auto">
                  {state.movieName}

                  <div className="flex gap-3 mt-2">
                      <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Drama</button>
                      <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Biography</button>
                  </div>
              </div>
          </div>;

           {/* Theatre listing */}

           <div className="mt-8 mb-4 w-[80%] m-auto h-full bg-[#fff]">
            {
              theatreList && Object.keys(theatreList).map((theatreId: string) => {
                return <Show shows={theatreList[theatreId].shows} key={theatreId} name={theatreList[theatreId].theatreName} />;
            })
            }
           </div>

        </HomeLayout>
    </div>
  );
};

export default BuyTickets;