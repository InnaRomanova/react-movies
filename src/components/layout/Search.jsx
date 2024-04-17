import React from "react";

class Search extends React.Component {
    // constructor() {
    //     this.
    state = {
        search: '',
        type: 'all',
    }
    // this.handleKey = this.handleKey.bind(this);
    // }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            //вызываем пропс из Main
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }),
    () => {this.props.searchMovies(this.state.search, this.state.type)});
        
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="search"
                            id="search"
                            type="email"
                            className="validate"
                            value={this.state.search}
                            //обнови наше поле
                            onChange={(event) => this.setState({ search: event.target.value })}
                            onKeyDown={this.handleKey} />
                        <button className="btn search-btn"
                            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                    </div>
                </div>
                <div className="radio">
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            // checked={this.state.type === "all"} 
                            />
                        <span>all</span>
                    </label>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            // checked={this.state.type === "movie"} 
                            />
                        <span>movie</span>
                    </label>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            // checked={this.state.type === "series"} 
                            />
                        <span>series</span>
                    </label>
                </div>
            </div>
        )

    }
}

export default Search;