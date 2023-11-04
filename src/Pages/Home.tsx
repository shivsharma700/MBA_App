import { useEffect, useState } from "react";

import IccBannerImage from "../Assets/iccBanner.avif";
import HomeBanner from "../components/HomeBanner";
import HomeCarousel from "../components/HomeCarousel";
import HomeMovieCard from "../components/HomeMovieCard";
import axiosInstance from "../Config/Axiosinstance";
import HomeLayout from "../Layouts/HomeLayout";
import Movie from "../Types/Movie";

const Home = () => {

  const [moviePosters, setMoviePosters] = useState([]);

  async function updateMovieList (){
    try {
      const response = await axiosInstance.get("/mba/api/v1/movies");
      console.log(response);
      setMoviePosters(response.data.data);
      console.log(moviePosters);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    updateMovieList();
  },[]);

  return (
    <div>
        <HomeLayout>
          <HomeCarousel/>
          <div className="min-h-[66rem] w-[80vw] mx-auto flex flex-col">
                  <HomeBanner image={IccBannerImage} />
                  <div className='text-2xl font-semibold text-black mt-4'>
                      Recommended Movies
                  </div>
                  <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-4">
                    {moviePosters && moviePosters.map((movie : Movie) => {
                      return <HomeMovieCard movieImage={movie.poster} />;
                    })}
                  </div>
  
                  <HomeBanner image={IccBannerImage} />
          </div>
        </HomeLayout>
    </div>
  );
};

export default Home;