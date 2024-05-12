import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Episodes } from "../../types/tv.data.interfaces";
import CrewGrid from "../../components/TvEpisodesPage/CrewGrid";
import GuestGrid from "../../components/TvEpisodesPage/GuestGrid";

const styles = {
    card: { width: 1000, borderRadius: 8 },
    media: { height: '100%', borderRadius: '24px 24px 24px 24px' },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

interface TvSeriesCardProps {
    episod: Episodes;
}

const TvEpisodesCard: React.FC<TvSeriesCardProps> = (props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ ...styles.card }}>
            <Grid container alignItems="center">
                <Grid item xs={4}>
                    {props.episod.still_path && (
                        <CardMedia
                            sx={{ ...styles.media }}
                            component="img"
                            image={`https://image.tmdb.org/t/p/w500/${props.episod.still_path}`}
                            alt={props.episod.name}
                        />
                    )}
                </Grid>

                <Grid item xs={8} container direction="column" spacing={1} sx={{ paddingLeft: '24px', paddingRight: '2px' }}>
                    <Grid item sx={{ marginBottom: '12px', marginRight: '16px' }}>
                        <Typography variant="h5" component="h2">
                            Episode {props.episod.episode_number}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ marginBottom: '12px' }}>
                        <Typography variant="h6" component="h2">
                            {props.episod.name}
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="flex-start" alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography variant="subtitle1" component="p">
                                <CalendarIcon fontSize="small" />
                                {props.episod.air_date}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ marginLeft: '24px' }}>
                            <Typography variant="subtitle2" component="p">
                                <StarRateIcon fontSize="small" />
                                {"  "} {props.episod.vote_average}{" "}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} />
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ marginLeft: 24, marginBottom: 8, marginTop: 12 }}>
                    <IconButton onClick={toggleExpanded}>
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Grid>

                {expanded && (
                    <Grid item xs={12} style={{ marginLeft: 24 }}>
                        <div style={{ marginBottom: 8 }}>
                            <Typography variant="h5" component="p" style={{ marginBottom: 24, marginLeft: 24 }}>
                                Authors
                           </Typography>
                            <div style={{ marginBottom: 8 }}>
                                <CrewGrid crew={props.episod.crew} />
                            </div>
                            <Typography variant="h5" component="p" style={{ marginBottom: 24, marginLeft: 24, marginTop:24 }}>
                                Actors
                            </Typography>
                            <div style={{ marginBottom: 8 }}>
                                <Grid item sx={{ marginBottom: '12px', marginRight: '16px' }}>
                                    <GuestGrid guests={props.episod.guest_stars} />
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                )}
            </Grid>
        </Card>
    );
};

export default TvEpisodesCard;