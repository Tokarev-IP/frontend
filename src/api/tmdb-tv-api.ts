export const getPopularTvSeries = (page: number) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch popular tv series. Response status: ${response.status}`);
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTvSeriesById = (id: string | number) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch popular tv series. Response status: ${response.status}`);
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getDataAboutSeasonById = (id: string | number, season_number: string | number) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch data about this season. Response status: ${response.status}`);
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};