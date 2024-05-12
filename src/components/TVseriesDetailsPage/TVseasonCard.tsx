import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import { Seasons } from "../../types/tv.data.interfaces";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const styles = {
    card: { width: 800, borderRadius: 8 },
    media: { height: '100%', borderRadius: '24px 24px 24px 24px' },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

interface TvSeriesDetailsDataProps {
    tvseasonDetails: Seasons;
}

const TvSeasonCard: React.FC<TvSeriesDetailsDataProps> = (props) => {

    return (
        <Card sx={{ ...styles.card }}>
            <Grid container alignItems="center">
                <Grid item xs={4}>
                    {props.tvseasonDetails.poster_path && (
                        <CardMedia
                            sx={{ ...styles.media }}
                            component="img"
                            image={`https://image.tmdb.org/t/p/w500/${props.tvseasonDetails.poster_path}`}
                            alt={props.tvseasonDetails.name}
                        />
                    )}
                </Grid>
                <Grid item xs={8} container direction="column" spacing={1} sx={{ paddingLeft: '24px', paddingRight: '2px' }}>
                    <Grid item sx={{ marginBottom: '4px' }}>
                        <Typography variant="h5" component="h2">
                            {props.tvseasonDetails.name}
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="left" sx={{ marginBottom: '8px' }}>
                        <Typography variant="subtitle1" component="p">
                            {props.tvseasonDetails.episode_count} episodes
                         </Typography>
                    </Grid>
                    <Grid item sx={{ marginBottom: '12px', marginRight: '16px' }}>
                        <Typography variant="body1" component="p">
                            {props.tvseasonDetails.overview}
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="flex-start" alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography variant="subtitle1" component="p">
                                <CalendarIcon fontSize="small" />
                                {props.tvseasonDetails.air_date}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ marginLeft: '24px' }}>
                            <Typography variant="subtitle2" component="p">
                                <StarRateIcon fontSize="small" />
                                {"  "} {props.tvseasonDetails.vote_average}{" "}
                            </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end">
                            <CardActions disableSpacing>
                                <Link to={`/tv/series/${props.tvseasonDetails.id}/season/${props.tvseasonDetails.season_number}`}>
                                    <Button variant="outlined" size="small" color="primary" sx={{ marginRight: '16px' }} >
                                        About season ...
                                </Button>
                                </Link>
                            </CardActions>
                        </Grid>
                        <Grid item xs={6} />
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default TvSeasonCard;