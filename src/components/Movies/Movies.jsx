import Movie from "./Movie"

function Movies(props) {
const {movies = []} = props;

    return (
        <div className="movies">

            {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />))
        : <h4>К сожалению, ничего по вашему запросу не найдено. Введите запрос по фильму</h4>}
        </div>
    )
}

export default Movies