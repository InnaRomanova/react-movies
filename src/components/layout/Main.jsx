import React from "react";
import Movies from "../Movies/Movies";
import Preloader from "./Preloader";
import Search from "./Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    // constructor() {
    //     super();
    //     this.
        state = {
            movies: [],
            Loading: true,
        }
    //     this.searchMovies = this.searchMovies.bind(this);
    // }


    componentDidMount() {
        //http://www.omdbapi.com/?i=tt3896198&apikey=9141aace
        //fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
         fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=matrix`)
            .then((response) => response.json())
            //обращаемся к setState и сообщаем, что необходимо положить в data Search
            .then(data => this.setState({ movies: data.Search, Loading: false }))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({Loading: true});
       // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        //fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=matrix`)    
        fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then((response) => response.json())
            //обращаемся к setState и сообщаем, что необходимо положить в data Search
            .then(data => this.setState({ movies: data.Search, Loading: false }))
    }

    render() {
        //деструктурируем
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ?
                    <Preloader /> : (<Movies movies={movies} />)  }

            </main>
        )

    }

}

export default Main;