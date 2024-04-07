import React from "react";
import ReccommendedMovies from "../components/reccommendedMovies";
import SampleMovie from "./sampleData";

export default {
  title: "Reccommended Movies Page/ReccommendedMovies",
  component: ReccommendedMovies,
};

export const Basic = () => <ReccommendedMovies movie={SampleMovie} />;
Basic.storyName = "Default";