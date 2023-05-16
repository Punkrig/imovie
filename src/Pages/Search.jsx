import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MovieGrid.css"
const searchUrl="https://api.themoviedb.org/3/search/movie";
const apiKey= "api_key=828788303bf3036a0cc1f962d7697a0f";


const Search = () => {
  const [searchParams]=useSearchParams();
  const [movies, setMovies]= useState([]);
  const query =searchParams.get("q");

  const getSearchMovies= async(url)=>{
    const res=await fetch(url);
    const data=await res.json();

    setMovies(data.results);
  }
  useEffect(()=>{
    const searchWithQueryUrl= `${searchUrl}?${apiKey}&query=${query}`;
    
    getSearchMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resutados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
      {movies.length >0 && 
      movies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search
