import React from "react";
import TvSeasonCard from "../TVseriesDetailsPage/TVseasonCard";
import { Seasons } from "../../types/tv.data.interfaces";

interface TvSeriesGridProps {
    seasons: Seasons[];
    id: string;
}

const AllSeasonsGrid: React.FC<TvSeriesGridProps> = (props) => {
    const seasons = props.seasons;

    const tvSeasonCards = seasons.map((season) => (
        <div key={season.id} style={{ marginBottom: 10 }}>
            <TvSeasonCard tvseasonDetails={season} seriesId={props.id} />
        </div>
    ));

    return <div>{tvSeasonCards}</div>;
}

export default AllSeasonsGrid;