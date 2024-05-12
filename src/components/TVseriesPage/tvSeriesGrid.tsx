import React from "react";
import TvSeriesCard from "../TVseriesPage/tvSeriesCard";
import Grid from "@mui/material/Grid";
import { TvSeriesData } from "../../types/tv.data.interfaces";

interface TvSeriesGridProps {
    tvSeries: TvSeriesData[];
}

const TvSeriesGrid: React.FC<TvSeriesGridProps> = (props) => {
    const tvSeries = props.tvSeries;
    let tvSeriesCards = tvSeries.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={6} lg={6} xl={6}>
            <TvSeriesCard key={m.id} tvSeries={m} />
        </Grid>
    ));
    return <Grid container spacing={2}>{tvSeriesCards}</Grid>;
}

export default TvSeriesGrid;