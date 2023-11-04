
import Show from "../components/Show";
import HomeLayout from "../Layouts/HomeLayout";

const BuyTickets = () => {
  return (
    <div className="buytickets min-h-[80vh]  bg-[#f2f2f2]" >
        <HomeLayout>

           <div className="bg-[#333545] text-white">
               <div className=" font-normal text-[2.4rem] pt-8 pb-6 w-[80vw] mx-auto">
                   12th Fail - Hindi

                   <div className="flex gap-3 mt-2">
                       <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Drama</button>
                       <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Biography</button>
                   </div>
               </div>
           </div>

           {/* Theatre listing */}

           <div className="mt-8 mb-4 w-[80%] m-auto h-full bg-[#fff]">
              <Show/>
              <Show/>
              <Show/>
              <Show/>
           </div>

        </HomeLayout>
    </div>
  );
};

export default BuyTickets;