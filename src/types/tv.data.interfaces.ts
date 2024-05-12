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
    genre_ids: number[];
}

export interface TvSeriesDataList {
    page: number;
    results: TvSeriesData[];
}

export interface TvSeriesDetailsData {
    adult: boolean;
    backdrop_path?: string;
    created_by: Created_by[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genres[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    name: string;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanies[];
    seasons: Seasons[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface Created_by {
    id: number;
    credit_id: string;
    name: string;
    original_name: string;
    gender: number;
    profile_path?: string;
}

export interface Genres {
    id: number;
    name: string;
}

export interface ProductionCompanies {
    id: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
}

export interface Seasons {
    air_date?: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path?: string;
    season_number: number;
    vote_average: number
}