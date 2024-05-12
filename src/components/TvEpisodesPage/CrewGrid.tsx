import React from "react";
import CrewCard from "../TvEpisodesPage/CrewCard";
import { Crew } from "../../types/tv.data.interfaces";

interface CrewProps {
    crew: Crew[];
}

const CrewGrid: React.FC<CrewProps> = (props) => {
    const crewCards = props.crew.map((crew) => (
        <div key={crew.id} style={{ marginBottom: 8 }}>
            <CrewCard crew={crew} />
        </div>
    ));

    return <div>{crewCards}</div>;
}

export default CrewGrid;