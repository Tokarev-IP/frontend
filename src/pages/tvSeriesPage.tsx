import React, { useState, useEffect } from "react";
import TvHeader from "../components/TVseriesPage/tvSeriesPageHeader";
import { TvSeriesDataList } from "../types/tv.data.interfaces";
import { getPopularTvSeries } from "../api/tmdb-tv-api";
import TvSeriesGrid from "../components/TVseriesPage/tvSeriesGrid";

const TvSeriesPage: React.FC = () => {
    const [tvSeriesDataList, setTvSeriesDataList] = useState<TvSeriesDataList | null>(null);

    useEffect(() => {
        const fetchPopularTvSeries = async () => {
            try {
                const data = await getPopularTvSeries();
                setTvSeriesDataList(data);
            } catch (error) {
                console.error("Error fetching popular TV series:", error);
            }
        };

        fetchPopularTvSeries();

        return () => {
            setTvSeriesDataList(null);
        };
    }, []);

    return (
        <div>
            <TvHeader title="Popular TV series" />
            {tvSeriesDataList && (
                <TvSeriesGrid tvSeries={tvSeriesDataList.results} />
            )}
        </div>
    );
};

export default TvSeriesPage;
