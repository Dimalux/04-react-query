// export interface Movie {
//     id: number;
//     poster_path: string; // Шлях до постеру фільму
//     backdrop_path: string; // Шлях до фонового зображення
//     title: string; // Назва фільму
//     overview: string; // Опис фільму
//     release_date: string; // Дата виходу
//     vote_average: number; // Середній рейтинг
// }





export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

export interface MoviesResponse {
    results: Movie[];
    total_pages: number;
    total_results: number;
    page: number;
}