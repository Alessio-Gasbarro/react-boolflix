import React from "react";

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.length === 0 ? (
                <p>Nessun risultato trovato.</p>
            ) : (
                movies.map((movie) => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p><strong>Titolo originale:</strong> {movie.original_title}</p>
                        <p><strong>Lingua originale:</strong> {movie.original_language}</p>
                        <p><strong>Voto:</strong> {movie.vote_average}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieList;