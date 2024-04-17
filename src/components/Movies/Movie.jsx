

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return (
    <div id={id} className="movie card">
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image"> 
              <img className="activator" src={poster} alt="постер"/>
              <span className="card-title">{title}</span>
              {/* <a className="btn-floating halfway-fab waves-effect waves-light red"></a> */}
              <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{year} <span className="right">{type}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;