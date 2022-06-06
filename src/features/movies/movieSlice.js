import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKey}  from "../../common/apis/MovieAPIKey";

export const fetchAsyncMovies=createAsyncThunk(
    "movies/fetchAsyncMovies",
    async ()=>{
        const movieText="Harry"
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=movie`
        )
        return response.data;
    } 
)


export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
      const seriesText = "Friends";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
      return response.data;
    }
  );
  
  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );
  


  const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
  };

  
  const movieSlice=createSlice({
      name:"movies",
      initialState,
      reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
            //in sync red u don't need ...state
          },
      },
      extraReducers:{
          [fetchAsyncMovies.pending]:()=>{
              console.log("Pending")
          },
          [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            //in payload u r getting api data
              console.log("Fetched Successfully")
              return {...state,movies:payload}

              //in async u need ....state
          },
          [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected ")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
          },
          [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
          },
      }
  })

export const { removeSelectedMovieOrShow } = movieSlice.actions;
//to dipatch actions

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
//movies after state is whatyou give name of reducer in store(give name of slice also same)


export default movieSlice.reducer;
//^^ this is not reducers only, it is "reducer" sending all reducer (incl extra) to store