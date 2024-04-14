import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieList } from "../../types/interfaces";

const MovieList: React.FC<BaseMovieList> = (props) => {
  const movies=props.movies;
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={12} md={12} lg={6} xl={6}>
      <Movie key={m.id} {...m} />
    </Grid>
  ));
  return movieCards;
}

  export default MovieList;