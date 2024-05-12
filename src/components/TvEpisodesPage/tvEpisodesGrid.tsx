import React from "react";
import TvEpisodesCard from "../TvEpisodesPage/tvEpisodesCard";
import { Episodes } from "../../types/tv.data.interfaces";

interface EpisodesProps {
    episodes: Episodes[];
}

const TvEpisodesGrid: React.FC<EpisodesProps> = (props) => {
    const seasons = props.episodes;

    const tvEpisodesCard = seasons.map((episode) => (
        <div key={episode.id} style={{ marginBottom: 10 }}>
            <TvEpisodesCard episod={episode} />
        </div>
    ));

    return <div>{tvEpisodesCard}</div>;
}

export default TvEpisodesGrid;