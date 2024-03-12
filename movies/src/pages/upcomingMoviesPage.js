import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies } from "../api/tmdb-api";
import { getUpcoming, getMovieImages } from "../api/tmdb-api";

const UpcomingPage = (props) => {
  const [movies, setMovies] = useState([]);


 

  useEffect(() => {
    getUpcoming().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
    
    />
  );
};
export default UpcomingPage;