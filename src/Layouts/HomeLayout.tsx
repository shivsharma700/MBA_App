
import HomeFooter from "../components/HomeFooter";
import Navbar from "../components/Navbar";
import ReactNode from "../Types/reactNode";

const HomeLayout = ({children} : {children : ReactNode}) => {
  return (
    <> 
      <Navbar/>
      {children}
      <HomeFooter />
    </>
  );
};

export default HomeLayout;