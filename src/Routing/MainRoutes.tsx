import { Route,Routes } from "react-router-dom";

import BuyTickets from "../Pages/BuyTickets";
import Home from "../Pages/Home";
import Seats from "../Pages/Seats";

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buytickets" element={<BuyTickets/>} />
        <Route path="/seats" element={<Seats/>} />
    </Routes>
  );
};

export default MainRoutes;