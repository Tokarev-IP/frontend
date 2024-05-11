import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { TvSeriesData } from "../../types/tv.data.interfaces";

const styles = {
    card: { width: 700, borderRadius: 8 },
    media: { height: '100%', borderRadius: '24px 24px 24px 24px' },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

const MAX_OVERVIEW_LINES = 5;

interface TvSeriesCardProps {
    tvSeries: TvSeriesData;
    action: (tv: TvSeriesData) => void;
}

const TvSeriesCard: React.FC<TvSeriesCardProps> = (props) => {

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
                    {props.tvSeries.poster_path && (
                        <CardMedia
                            sx={{ ...styles.media }}
                            component="img"
                            image={`https://image.tmdb.org/t/p/w500/${props.tvSeries.poster_path}`}
                            alt={props.tvSeries.original_name}
                        />
                    )}
                </Grid>
                <Grid item xs={8} container direction="column" spacing={1} sx={{ paddingLeft: '24px', paddingRight: '2px' }}>
                    <Grid item sx={{ marginBottom: '12px' }}>
                        <Typography variant="h5" component="h2">
                            {props.tvSeries.original_name}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ marginBottom: '12px', marginRight: '16px' }}>
                        <Typography variant="body1" component="p">
                            {getTruncatedOverview(props.tvSeries.overview)}
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="flex-start" alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography variant="subtitle1" component="p">
                                <CalendarIcon fontSize="small" />
                                {props.tvSeries.first_air_date}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ marginLeft: '24px' }}>
                            <Typography variant="subtitle2" component="p">
                                <StarRateIcon fontSize="small" />
                                {"  "} {props.tvSeries.vote_average}{" "}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} />
                    </Grid>
                    <Grid item container justifyContent="flex-end">
                        <CardActions disableSpacing>
                            <Link to={`/movies/${props.tvSeries.id}`}>
                                <Button variant="outlined" size="small" color="primary" sx={{ marginRight: '16px' }} >
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

export default TvSeriesCard;