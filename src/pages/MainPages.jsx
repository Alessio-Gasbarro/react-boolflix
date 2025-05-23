import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Searchbar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import { fetchRecommendedMedia } from '../services/api'

const MainPages = () => {

    // useState SEARCH
    const [search, setSearch] = useState('');
    // useState SEARCH RESULT
    const [results, setResults] = useState([]);

    // useEffect NON SEARCH CONTENT
    useEffect(() => {
        const loadRecommended = async () => {
            const recommended = await fetchRecommendedMedia();
            setResults(recommended);
        };
        if (!search) {
            loadRecommended();
        }
    }, [search]);

    // CHIAMATA AXIOS FILM E SERIE
    const searchMovies = async () => {
        try {
            //AXIOS FILM
            const movieResponse = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=8cbaf099e1ff70eeef04796ef3a0e18f&query=${search}`
            );

            //AXIOS TV SERIES
            const tvResponse = await axios.get(
                `https://api.themoviedb.org/3/search/tv?api_key=8cbaf099e1ff70eeef04796ef3a0e18f&query=${search}`
            );

            setResults([...tvResponse.data.results, ...movieResponse.data.results]);

        } catch (error) {
            console.error('Qualquadra non cosa, potrebbe essere:', error);
        }
    };

    // RETURN FINALE
    return (
        <>
            <div className='row'>
                <div className='col-12 p-5 bg-dark'>
                    <Searchbar
                        query={search}
                        setQuery={setSearch}
                        searchMovies={searchMovies}
                    />
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    {results.map((movie) => (
                        <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center" key={movie.id}>
                            <MovieList movie={movie} />
                        </div>
                    ))}
                </div>
                {search && results.length === 0 && (
                    <div className='text-center text-muted'>Nessun risultato trovato.</div>
                )}
            </div>
        </>
    );
};

export default MainPages