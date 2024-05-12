import React from "react";
import GuestCard from "../TvEpisodesPage/GuestCard";
import { Guest_stars } from "../../types/tv.data.interfaces";
import Grid from "@mui/material/Grid";

interface CrewProps {
    guests: Guest_stars[];
}

const CrewGrid: React.FC<CrewProps> = (props) => {
    let crewCards = props.guests.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={6} lg={6} xl={6}>
            <GuestCard guest={m} />
        </Grid>
    ));
    return <Grid container spacing={2}>{crewCards}</Grid>;
}

export default CrewGrid;