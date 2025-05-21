const API_KEY = "8cbaf099e1ff70eeef04796ef3a0e18f";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=it-IT&query=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results || [];
};

//QUI POI CONST fetchTVShows

export const searchAllMedia = async (query) => {
    const movies = await fetchMovies(query);

    const unifiedResults = [
        ...movies.map(item => ({
            id: `movie-${item.id}`,
            type: "movie",
            title: item.title,
            original_title: item.original_title,
            original_language: item.original_language,
            vote_average: item.vote_average,
        })),
        //QUI ...MOVIES
    ];

    return unifiedResults;
};