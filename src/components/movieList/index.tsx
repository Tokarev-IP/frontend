import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { ListedMovie } from "../../types/interfaces";

interface MovieListProps {
    movies: ListedMovie[],
    action: (m: ListedMovie) => React.ReactNode;
}

const MovieList: React.FC<MovieListProps> = (props) => {
    const movies = props.movies;
    let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={12} md={12} lg={6} xl={6}>
       <Movie key={m.id} movie={m} action={props.action} />
    </Grid>
  ));
  return movieCards;
}

export default MovieList;