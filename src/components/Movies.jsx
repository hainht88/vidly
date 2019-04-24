import React, { Component } from "react";
import _orderBy from "lodash/orderBy";
import _range from "lodash/range";
import GenreList from "./GenreList";
import MovieTable from "./MovieTable";
import EditForm from "./EditForm";
import http from "./services/http";
import config from "../config.json";

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortBy: { column: "title", order: "asc" },
    selectedGenre: "all genres",
    moviesPerPage: 3,
    currentPage: 0
  };

  async componentDidMount() {
    const { data: movies } = await http
      .get(config.API_URL + "/movies")
      .catch(ex => console.log(ex));
    const { data: genres } = await http
      .get(config.API_URL + "/genres")
      .catch(ex => console.log(ex));

    this.setState({
      movies,
      genres: [{ _id: 0, name: "All Genres" }, ...genres]
    });
  }

  handleChangeGenre = genre => {
    this.setState({ selectedGenre: genre.toLowerCase(), currentPage: 0 });
  };

  sortMovies = (movies, column, order) => _orderBy(movies, column, order);

  handlePageChange = page => this.setState({ currentPage: page });

  handleSort = col =>
    this.setState({
      sortBy: {
        column: col,
        order:
          col === this.state.sortBy.column
            ? this.state.sortBy.order === "asc"
              ? "desc"
              : "asc"
            : "asc"
      }
    });

  render() {
    const {
      movies,
      genres,
      selectedGenre,
      sortBy,
      currentPage,
      moviesPerPage
    } = this.state;

    const filterdMovies = this.sortMovies(
      movies.filter(movie =>
        selectedGenre === "all genres"
          ? movie
          : movie.genre.name.toLowerCase() === selectedGenre
      ),
      sortBy.column,
      sortBy.order
    );

    const totalPage = _range(
      0,
      Math.ceil(filterdMovies.length / moviesPerPage)
    );

    return (
      <div className="container">
        <p>{`Showing ${filterdMovies.length} movies from the database.`}</p>
        <div className="row">
          <GenreList
            genres={genres}
            selectedGenre={selectedGenre}
            onChange={this.handleChangeGenre}
          />
          <MovieTable
            movies={filterdMovies}
            currentPage={currentPage}
            totalPage={totalPage}
            moviesPerPage={moviesPerPage}
            sortBy={sortBy}
            handleSort={this.handleSort}
            handlePageChange={this.handlePageChange}
          />
          <EditForm />
        </div>
      </div>
    );
  }
}
