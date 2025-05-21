const API_KEY = "8cbaf099e1ff70eeef04796ef3a0e18f";
const BASE_URL = "https://api.themoviedb.org/3";

//Fecth Movies
const fetchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=it-IT&query=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results || [];
};

//Fetch TVSeries
const fetchTVShows = async (query) => {
    const url = `${BASE_URL}/search/tv?api_key=${API_KEY}&language=it-IT&query=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results || [];
};

export const searchAllMedia = async (query) => {
    const movies = await fetchMovies(query);
    const tvShows = await fetchTVShows(query);

    const unifiedResults = [
        ...movies.map(item => ({
            id: `movie-${item.id}`,
            type: "movie",
            title: item.title,
            original_title: item.original_title,
            original_language: item.original_language,
            vote_average: item.vote_average,
        })),
        ...tvShows.map(item => ({
            id: `tv-${item.id}`,
            type: "tv",
            title: item.name,
            original_title: item.original_name,
            original_language: item.original_language,
            vote_average: item.vote_average,
        })),
    ];

    return unifiedResults;
};

//FUNZIONE RANDOM FILM SENZA RICERCA
export const fetchRecommendedMedia = async () => {
    const movieUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=it-IT&page=1`;
    const tvUrl = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=it-IT&page=1`;

    const [movieRes, tvRes] = await Promise.all([
        fetch(movieUrl).then(res => res.json()),
        fetch(tvUrl).then(res => res.json()),
    ]);

    const movies = movieRes.results || [];
    const tvShows = tvRes.results || [];

    const unifiedResults = [
        ...movies.map(item => ({
            id: `movie-${item.id}`,
            type: "movie",
            title: item.title,
            original_title: item.original_title,
            original_language: item.original_language,
            vote_average: item.vote_average,
            poster_path: item.poster_path,
            overview: item.overview,
        })),
        ...tvShows.map(item => ({
            id: `tv-${item.id}`,
            type: "tv",
            title: item.name,
            original_title: item.original_name,
            original_language: item.original_language,
            vote_average: item.vote_average,
            poster_path: item.poster_path,
            overview: item.overview,
        })),
    ];

    return unifiedResults;
}