const MovieList = ({ movie }) => {
    //  assegno ad ogni lingua il codice della bandiera corrispondente
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

    // numero massimo di stelle da mostrare
    let starArray = [1, 2, 3, 4, 5];
    // recupero il voto del film/serie e lo divido per 2 per avere un voto da 1 a 5 
    // e utilizzando math.ceil per arrotondareper eccesso
    const vote = Math.ceil(movie.vote_average / 2);


    // variabile che contiene  il path delle copertine dei film/serie
    const imagePath = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    // recupero il codice della bandiera corrispondente alla lingua del film/serie
    const countryFlag = languageFlags[movie.original_language];

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