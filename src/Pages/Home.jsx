import { useState,useEffect } from "react"
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";
import "./MovieGrid.css"
const moviesURL= "https://api.themoviedb.org/3/movie/";
const apiKey= "api_key=828788303bf3036a0cc1f962d7697a0f";


const Home = () => {
  const [topMovies, setTopMovies]= useState([]);

  const getTopRatedMovies= async(url)=>{
    const res=await fetch(url);
    const data=await res.json();

    setTopMovies(data.results);
  }
  useEffect(()=>{
    const topRateUrl= `${moviesURL}top_rated?${apiKey}`;
    
    getTopRatedMovies(topRateUrl);
  },[])
  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
      {topMovies.length >0 && 
      topMovies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home
