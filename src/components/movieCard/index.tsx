import React, { MouseEvent, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import { MovieT } from "../../types/interfaces";

const styles = {
    card: { width: 700, borderRadius: 8 },
    media: { height: '100%', borderRadius: '24px 24px 24px 24px' },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

const MAX_OVERVIEW_LINES = 5;

interface MovieListProps {
    movie: MovieT,
    action: (m: MovieT) => void;
}

const MovieCard: React.FC<MovieListProps> = (props) => {

    const movie = { ...props.movie, favourite: false };
    const { favourites, addToFavourites, removeFromFavourites } = useContext(MoviesContext);

    if (favourites.find((id) => id === movie.id))
        movie.favourite = true;

    const addOrRemove = () => {
        if (movie.favourite) { removeFromFavourites(movie) }
        else { addToFavourites(movie) }
    }

    const getTruncatedOverview = (text) => {
        if (text && text.length > MAX_OVERVIEW_LINES * 50) { 
            return text.slice(0, MAX_OVERVIEW_LINES * 50) + '...';
        }
        return text;
    };

    return (
        <Card sx={{ ...styles.card }}>
            <Grid container alignItems="center">
                <Grid item xs={4}>
                    {props.movie.poster_path && (
                        <CardMedia
                            sx={{ ...styles.media }}
                            component="img"
                            image={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
                            alt={props.movie.title}
                        />
                    )}
                </Grid>
                <Grid item xs={8} container direction="column" spacing={1} sx={{ paddingLeft: '24px', paddingRight: '2px' }}>
                    <Grid item sx={{ marginBottom: '12px' }}>
                        <Typography variant="h5" component="h2">
                            {props.movie.title}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ marginBottom: '12px', marginRight: '16px' }}>
                        <Typography variant="body1" component="p">
                            {getTruncatedOverview(props.movie.overview)}
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="flex-start" alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography variant="subtitle1" component="p">
                                <CalendarIcon fontSize="small" />
                                {props.movie.release_date}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ marginLeft: '24px' }}>
                            <Typography variant="subtitle2" component="p">
                                <StarRateIcon fontSize="small" />
                                {"  "} {props.movie.vote_average}{" "}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} />
                    </Grid>
                    <Grid item container justifyContent="flex-end">
                        <CardActions disableSpacing>

                            <IconButton aria-label="add to favourites" sx={{ marginRight: '24px' }} onClick={ addOrRemove }>
                                <FavoriteIcon color={movie.favourite ? 'warning' : 'primary'} fontSize="large" />
                            </IconButton>

                            <Link to={`/movies/${props.movie.id}`}>
                                <Button variant="outlined" size="medium" color="primary" sx={{ marginRight: '16px' }} >
                                    More Info ...
                                </Button>
                            </Link>
                        </CardActions>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default MovieCard;