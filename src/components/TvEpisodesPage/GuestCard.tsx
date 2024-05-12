import React from "react";
import Typography from "@mui/material/Typography";
import { Guest_stars } from "../../types/tv.data.interfaces";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

interface GuestProps {
    guest: Guest_stars;
}

const styles = {
    card: { width: 1000, borderRadius: 8 },
    media: { height: 120, width: 120, borderRadius: '24px' },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

const GuestCard: React.FC<GuestProps> = (props) => {

    return (
       <Grid container alignItems="center">
            <Grid item xs={4}>
                {props.guest.profile_path && (
                    <CardMedia
                        sx={{ ...styles.media }}
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${props.guest.profile_path}`}
                        alt={props.guest.name}
                        />
                    )}
            </Grid>
            <div key={props.guest.name} style={{ marginBottom: 8 }}>
                    <Typography variant="h5" component="p">
                        {props.guest.name}
                    </Typography>
                    <Typography variant="h6" component="p">
                        Character: {props.guest.character}
                    </Typography>
            </div>
        </Grid>
    );

};

export default GuestCard;