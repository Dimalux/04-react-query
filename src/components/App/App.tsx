import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Додано імпорт Toaster
import { fetchMovies } from '../../services/movieService';
import { Movie } from '../../types/movie';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal'; 
import styles from './App.module.css';

export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const handleSearch = async (query: string) => {
        try {
            setIsLoading(true);
            setError(false);
            setMovies([]);
            
            const data = await fetchMovies(query);
            
            if (data.results.length === 0) {
                toast.error('No movies found for your request.');
            }
            
            setMovies(data.results);
        } catch (err) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectMovie = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className={styles.container}>
            {/* Додано Toaster для відображення toast-повідомлень */}
            <Toaster position="top-center" />
            
            <SearchBar onSubmit={handleSearch} />
            
            {isLoading && <Loader />}
            
            {error && <ErrorMessage />}
            
            {movies.length > 0 && !isLoading && !error && (
                <MovieGrid movies={movies} onSelect={handleSelectMovie} />
            )}
            
            {selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
            )}
        </div>
    );
}