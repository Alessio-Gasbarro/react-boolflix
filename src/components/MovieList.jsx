const MovieList = ({ movie }) => {
    //TUTTE LE LINGUE
    const languageFlags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        es: 'es',
        de: 'de',
        ja: 'jp',
        zh: 'cn',
        ko: 'kr',
        hi: 'in',
        ru: 'ru',
        pt: 'pt',
        nl: 'nl',
        sv: 'se',
        pl: 'pl',
        cn: 'cn',
    };

    //CODICE PER BANDIERINE
    const countryFlag = languageFlags[movie.original_language];

    //STELLE DIVISE PER 2
    let starArray = [1, 2, 3, 4, 5];
    const vote = Math.ceil(movie.vote_average / 2);


    //PATH COPERTINE POSTS
    const imagePath = `https://image.tmdb.org/t/p/w342${movie.poster_path}`

    //RETURN FINALE
    return (
        <div className='movie-card' style={{ width: '18rem' }}>
            <img className='card-img-top poster-img' src={imagePath} alt="" />
            <div className='card-overlay'>
                <h3 className='card-title '>{movie.title || movie.name}</h3>
                <p ><strong>Titolo originale:</strong> {movie.original_title || movie.original_name}</p>
                <p>
                    <strong>Lingua:</strong>
                    {' '}
                    {countryFlag ? (
                        <img
                            src={`https://flagcdn.com/24x18/${countryFlag}.png`}
                            alt={movie.original_language}
                        />
                    ) : (
                        movie.original_language
                    )}
                </p>
                <p><strong >Voto:</strong> {starArray.map((number) => {
                    if (number <= vote) {
                        return <span key={number}><i className="fa-solid fa-star star-color"></i></span>;
                    } else {
                        return <span key={number}><i className="fa-regular fa-star star-color"></i></span>;
                    }
                })}
                </p>
                <p className='overview'><strong>Trama:</strong> {movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieList;