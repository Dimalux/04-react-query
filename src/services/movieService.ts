import axios from 'axios';
import { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

interface MoviesResponse {
    results: Movie[]; // Масив знайдених фільмів
    total_pages: number; // Загальна кількість сторінок
    total_results: number; // Загальна кількість результатів
    page: number; // Поточна сторінка
}

// Функція для пошуку фільмів за запитом
export const fetchMovies = async (query: string): Promise<MoviesResponse> => {
    const response = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
        params: {
            query, // Пошуковий запит
        },
        headers: {
            // Використовуємо токен з змінних оточення
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
    });
    return response.data; // Повертаємо отримані дані
};