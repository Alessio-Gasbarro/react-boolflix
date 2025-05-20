import React from "react";

const getFlagEmoji = (langCode) => {
    const isoMap = {
        en: "gb",
        it: "it",
        fr: "fr",
        de: "de",
        ja: "jp",
        ko: "kr",
        es: "es",
        zh: "cn",
    };

    const iso = isoMap[langCode];
    if (!iso) return "🏳️";

    return iso
        .toUpperCase()
        .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));
};

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.length === 0 ? (
                <p>Nessun risultato trovato.</p>
            ) : (
                movies.map((item) => (
                    <div className="media-item" key={item.id}>
                        <h3>{item.title}</h3>
                        <p><strong>Titolo originale:</strong> {item.original_title}</p>
                        <p><strong>Lingua:</strong> {getFlagEmoji(item.original_language)} ({item.original_language})</p>
                        <p><strong>Voto:</strong> {item.vote_average}</p>
                        <p><em>Tipo:</em> {item.type === "tv" ? "Serie TV" : "Film"}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieList;