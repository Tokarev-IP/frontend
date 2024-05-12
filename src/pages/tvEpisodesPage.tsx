import React, { useState, useEffect } from "react";
import TvHeader from "../components/TVseriesPage/tvSeriesPageHeader";
import { SerialSeasonsData } from "../types/tv.data.interfaces";
import { getDataAboutSeasonById } from "../api/tmdb-tv-api";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { TvEpisodesGrid } from '../components/TvEpisodesPage/tvEpisodesGrid';

const TvEpisodesPage: React.FC = () => {
    const [serialSeasonsData, setSerialSeasonsData] = useState<SerialSeasonsData | null>(null);

    const { id } = useParams();
    const { season_number } = useParams();

    useEffect(() => {
        const getTVById = async (id: string) => {
            try {
                const data = await getDataAboutSeasonById(id, season_number);
                setSerialSeasonsData(data);
            } catch (error) {
                console.error("Error fetching TV series:", error);
            }
        };

        getTVById(id);

    }, []);

    return (
        <div >
            <div>
                <TvHeader title={'1234'} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', width: 800 }}>
                        {'1234'}
                    </Typography>
                    <Typography variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', width: 800 }}>
                        Seasons
                  </Typography>
                    {serialSeasonsData && (
                        <TvEpisodesGrid episode={serialSeasonsData.episodes} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TvEpisodesPage;