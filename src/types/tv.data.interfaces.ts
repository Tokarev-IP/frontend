export interface TvSeriesData {
    original_name: string;
    id: number;
    original_language: string;
    overview: string;
    first_air_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    vote_count: number;
}

export interface TvSeriesDataList {
    page: number;
    results: TvSeriesData[];
}