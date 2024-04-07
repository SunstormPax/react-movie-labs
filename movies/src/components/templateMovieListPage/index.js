import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [page, setPage] = useState(1); // Current Pagination Section
  const [itemsPerPage] = useState(5); // Number of cards on each page
  const genreId = Number(genreFilter);


  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={2} xl={2}> 
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies.slice(startIndex, endIndex)}></MovieList> {/* Sliced the displayed movies and inserted the pagination component */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination count={Math.ceil(displayedMovies.length / itemsPerPage)} page={page} onChange={handlePageChange} /> {/* Pagination component */}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
