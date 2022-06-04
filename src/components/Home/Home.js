import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";


import {
    fetchAsyncMovies,
    fetchAsyncShows,
  } from "../../features/movies/movieSlice";
import "./Home.scss"
const Home = () => {
 
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
},[dispatch])

  return (
    <div className="upperdiv">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
