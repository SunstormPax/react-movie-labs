import React from "react";
import Reccommended from "../reccommendedCard";
import Grid from "@mui/material/Grid";

const ReccommendedList = ( {reccommended, action }) => {
  let reccommendedCards = reccommended.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Reccommended key={m.id} reccommended={m} action={action} />
    </Grid>
  ));
  return reccommendedCards;
};

export default ReccommendedList;