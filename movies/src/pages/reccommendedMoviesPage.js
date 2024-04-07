import React, { useState, useEffect } from "react";
import ReccommendedListPageTemplate from '../components/reccommendedMovies'
import { getMovies } from "../api/tmdb-api";
import { getReccommended, getMovieImages } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';




const ReccommendedMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('reccommended', getReccommended)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <ReccommendedListPageTemplate
      title='Reccommended Movies'
     movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default ReccommendedMoviesPage;