export interface TvSeriesData {
    title: string;
    id: number;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    vote_count: number;
    favourite?: boolean;
}

export interface TvSeriesDataList {
    page: number;
    results: TvSeriesData[];
}