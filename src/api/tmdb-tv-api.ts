export const getPopularTvSeries = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
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