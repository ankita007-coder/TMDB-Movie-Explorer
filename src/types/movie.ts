export interface Genre{
    id: number;
    name: string;
}

export interface Movie{
    id:number;
    title: string;
    overview:string;
    poster_path: string | null;
    backdrop_path: string | null;
    vote_average: number;
    release_date: string;
    tagline: string;
}

export interface MovieDetails extends Movie{
    runtime: number;
    genres: Genre[];
}

export interface Cast{
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

interface WatchProvider{
    logo_path:string;
    provider_id:number;
    provider_name:string;
}
export interface CountryWatchProviders{
    link?:string;
    flatrate:WatchProvider[];
    buy:WatchProvider[];
    rent:WatchProvider[];
}

export interface WatchProvidersResponse {
  id: number;
  results: {
    IN?: CountryWatchProviders;
  };
}
//We make "IN" optional. Because sometimes it won’t exist.


export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
