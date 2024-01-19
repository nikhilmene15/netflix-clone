import React, { useEffect, useState } from "react";
import axios from "./axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';




function Row({ title, fetchUrl }) {
   
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    FetchData();
  }, [fetchUrl]);

  console.log("movies", movies);


  const isMobile = useMediaQuery({ maxWidth: 767 });
const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: isMobile ? 1 : 7,
  slidesToScroll: 2,
  arrows: true,
};
  return (
    <>
      <section className="overflow-hidden">
          <div>
          <h2 style={{color:"#fff"}}>{title}</h2>
          <Slider {...sliderSettings}> 
            {movies.map((movie) => {
                
                 return (
                <div key={movie.id}>
                  <img
                    className="img-fluid pe-2"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                </div>
              );
            })}
            </Slider>

          </div>
   
      </section>
    </>
  );
}

export default Row;
