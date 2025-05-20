const apiKey = "8cbaf099e1ff70eeef04796ef3a0e18f";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&language=it-IT&query=${encodeURIComponent(query)}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.results || [];
    } catch (error) {
        console.error("Errore durante il fetch dei film:", error);
        return [];
    }
};