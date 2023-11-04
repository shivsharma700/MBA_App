import { Route,Routes } from "react-router-dom";

import BuyTickets from "../Pages/BuyTickets";
import Home from "../Pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buytickets" element={<BuyTickets/>} />
    </Routes>
  );
};

export default MainRoutes;