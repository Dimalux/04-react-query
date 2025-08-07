// import toast from 'react-hot-toast';
// import styles from './SearchBar.module.css';

// interface SearchBarProps {
//   onSubmit: (query: string) => void;
// }

// export default function SearchBar({ onSubmit }: SearchBarProps) {
//   const handleSubmit = (formData: FormData) => {
//     const query = formData.get('query')?.toString().trim() || '';
    
//     if (!query) {
//       toast.error('Please enter your search query.');
//       return;
//     }
    
//     onSubmit(query);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         <a
//           className={styles.link}
//           href="https://www.themoviedb.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by TMDB
//         </a>
//         <form className={styles.form} action={handleSubmit}>
//           <input
//             className={styles.input}
//             type="text"
//             name="query"
//             autoComplete="off"
//             placeholder="Search movies..."
//             autoFocus
//           />
//           <button className={styles.button} type="submit">
//             Search
//           </button>
//         </form>
//       </div>
//     </header>
//   );
// }







import { useRef } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const query = inputRef.current?.value.trim() || '';
        
        if (!query) {
            toast.error('Please enter your search query.');
            return;
        }
        
        onSubmit(query);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    className={styles.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TMDB
                </a>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        className={styles.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                    />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
}


