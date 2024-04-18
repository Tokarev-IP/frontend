import React, { useContext } from "react"
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieT } from "../../types/interfaces";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MoviesContext } from "../../contexts/moviesContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import WriteReviewIcon from "../cardIcons/writeReview";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 1.5,
    },
};

const MovieHeader: React.FC<MovieT> = (props) => {

    return (
        <Paper component="div" sx={styles.root}>

            <Typography variant="h4" component="h3">
                {props.title}{"   "}
                <a href={props.homepage}>
                    <HomeIcon color="primary" fontSize="large" sx={{ marginLeft: '16px' }} />
                </a>
                <br />
                <span>{`${props.tagline}`} </span>
            </Typography>

        </Paper>
    );
};

export default MovieHeader;