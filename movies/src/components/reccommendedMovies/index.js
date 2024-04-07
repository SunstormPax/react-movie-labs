import React, { useState } from "react";
import Header from "../headerMovieList";

import ReccommendedList from "../reccommendedList";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

function ReccommendedListPageTemplate({ reccommended, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [page, setPage] = useState(1); // Current page of pagination
  const [itemsPerPage] = useState(5); // Number of items per page
  const genreId = Number(genreFilter);

  // Calculate the index range of movies to display based on pagination
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
        <Grid key="find" item xs={12} sm={6} md={4} lg={2} xl={2}> {/* Reduced the size for 5 cards across */}
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <ReccommendedList action={action} movies={displayedReccommended.slice(startIndex, endIndex)}></ReccommendedList> {/* Sliced the displayed movies based on pagination */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination count={Math.ceil(displayedMovies.length / itemsPerPage)} page={page} onChange={handlePageChange} /> {/* Pagination component */}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ReccommendedListPageTemplate;