const SearchBar = ({ query, setQuery, searchMovies }) => {
    return (
        <header className='d-flex justifycontent-between'>

            <div className='col-6 d-flex justify-content-start text-danger '>
                <h1 className='logo'>BOOLFIX</h1>
            </div>

            <div className='col-6 d-flex justify-content-end '>

                <input
                    className='form-control mx-5 input-search'
                    type="text"
                    placeholder="Cerca un film..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button
                    className='btn btn-danger text-dark btn-search'
                    onClick={searchMovies}>Cerca
                </button>

            </div>
        </header>
    );
};

export default SearchBar;