import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./Request";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  console.log(movie);

  return (
    <>
      <section className="position-relative banner__sec">
        <div>
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
        </div>

        <div className="banner__content">
          <div className="container">
            <h1>{`${movie.name}`}</h1>
            <div className="my-4">
              <button className="banner_btn">Play </button>
              <button className="banner_btn"> My List</button>
            </div>
            <p>{truncate(`${movie.overview}`, 150)}</p>
          </div>
        </div>
        <div className="banner__fadeBottom" />
      </section>
    </>
  );
}

export default Banner;
