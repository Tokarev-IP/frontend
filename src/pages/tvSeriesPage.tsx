import React, { useState, useEffect } from "react";
import TvHeader from "../components/TVseriesPage/tvSeriesPageHeader";
import { TvSeriesDataList } from "../types/tv.data.interfaces";
import { getPopularTvSeries } from "../api/tmdb-tv-api";
import TvSeriesGrid from "../components/TVseriesPage/tvSeriesGrid";

const TvSeriesPage: React.FC = () => {
    const [tvSeriesDataList, setTvSeriesDataList] = useState<TvSeriesDataList | null>(null);

    const [page, setPage] = useState(1);

    const fetchPopularTvSeries = async (pageNumber: number) => {
        try {
            const data = await getPopularTvSeries(pageNumber);
            setTvSeriesDataList(data);
        } catch (error) {
            console.error("Error fetching popular TV series:", error);
        }
    };

    useEffect(() => {
        fetchPopularTvSeries(page);
    }, [page]);

    const loadNextPage = () => {
        setPage(page + 1);
    };

    const decrement = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const increment = () => {
        if (page < 30) {
            setPage(page + 1);
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <TvHeader title="Popular TV series" />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <button onClick={decrement}>-</button>
                <div style={{ margin: "0 10px" }}>{page}</div>
                <button onClick={increment}>+</button>
            </div>

            {tvSeriesDataList && (
                <div>
                    <TvSeriesGrid tvSeries={tvSeriesDataList.results} />
                    <button onClick={loadNextPage}>Load More</button>
                </div>
            )}
        </div>
    );
};

export default TvSeriesPage;
