import React, { useState, useEffect } from "react";
import TvHeader from "../components/TVseriesPage/tvSeriesPageHeader";

const TvSeriesPage: React.FC = () => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <TvHeader
                title="Popular TV series"
            />
        </div>
    );
};

export default TvSeriesPage;
