import React, { useState, useEffect } from "react";
import TvHeader from "../components/TVseriesPage/tvSeriesPageHeader";
import { TvSeriesDetailsData } from "../types/tv.data.interfaces";
import { getTvSeriesById } from "../api/tmdb-tv-api";
import AllSeasonsGrid from "../components/TVseriesDetailsPage/AllSeasonsGrid";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

const TvSeriesDetailsPage: React.FC = () => {
    const [tvSeriesDetailsData, setTvSeriesDetailsData] = useState<TvSeriesDetailsData | null>(null);

    const { id } = useParams();

    useEffect(() => {
        const getTVById = async (id: string) => {
            try {
                const data = await getTvSeriesById(id);
                setTvSeriesDetailsData(data);
            } catch (error) {
                console.error("Error fetching TV series:", error);
            }
        };

        getTVById(id);

    }, []);
    var name = ""
    if (tvSeriesDetailsData != null) name = tvSeriesDetailsData.original_name
    var overview = ""
    if (tvSeriesDetailsData != null) overview = tvSeriesDetailsData.overview
 
    return (
        <div >
            <div>
                <TvHeader title={name} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', width: 800 }}>
                      {overview}
                  </Typography>
                  <Typography variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', width: 800}}>
                      Seasons
                  </Typography>
                    {tvSeriesDetailsData && (
                        <AllSeasonsGrid seasons={tvSeriesDetailsData.seasons} id={id} />
                   )}
                </div>
            </div>
        </div>
    );
};

export default TvSeriesDetailsPage;