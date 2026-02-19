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

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}