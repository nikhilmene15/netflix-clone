import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./Request";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
            request.data.results[(Math.floor(Math.random() * (request.data.results.length -1)))]
            );
        return request;
    }

    fetchData();
},[])


function truncate(string,n){
    return string?.length>n ? string.substr(0,n-1) + '...' : string;
}
console.log(movie);

  return (
    <>
      <section>
        <div>
          <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} />
        </div>

        <div>
          <h1>{(`${movie?.name}`)}</h1>
          <div>
            <button>Play </button>
            <button> My List</button>
            <p>{truncate(`${movie?.overview}`,150)}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
