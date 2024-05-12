import React from "react";
import Typography from "@mui/material/Typography";
import { Crew } from "../../types/tv.data.interfaces";

interface TvSeriesCardProps {
    crew: Crew;
}

const CrewCard: React.FC<TvSeriesCardProps> = (props) => {

    return (
        <Typography variant="subtitle2" component="p">
            {props.crew.job}{': '}{props.crew.name}
        </Typography>
    );
};

export default CrewCard;