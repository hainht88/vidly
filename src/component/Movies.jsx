import React, { Component } from "react";
import Axios from "axios";
import MovieTable from "./MovieTable";
import ListGroup from "./common/ListGroup";
import SearchBox from "./common/SearchBox";
import Pagination from "./common/Pagination";
import _ from "lodash";

class Movies extends Component {
  state = {
    query: "",
    movies: [],
    genres: [],
    listMovies: [],
    currentPage: 0,
    itemPerPage: 4,
    currentGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { currentGenre } = this.state;

    const { data } = await Axios.get("http://localhost:3900/api/genres");

    const { data: movies } = await Axios.get(
      "http://localhost:3900/api/movies"
    );

    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const listMovies =
      currentGenre === "All Genres"
        ? movies
        : movies.filter(m => m.genre.name === currentGenre);

    this.setState({ genres, movies, listMovies });
    this.handleSort();
  }

  handleQueryChange = query => {
    const { movies } = this.state;

    if (query === " ") return;

    const listMovies =
      query === ""
        ? movies
        : movies.filter(m =>
            m.title.toLowerCase().includes(query.toLowerCase())
          );

    const currentPage = 0;
    const currentGenre = "All Genres";
    this.setState({ listMovies, query, currentPage, currentGenre });
  };

  handleClick = page => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = g => {
    const { movies } = this.state;
    const currentGenre = g;
    const currentPage = 0;
    const query = "";

    const listMovies =
      currentGenre === "All Genres"
        ? movies
        : movies.filter(m => m.genre.name === currentGenre);

    this.setState({ currentGenre, currentPage, listMovies, query });
  };

  handleSort = (column = "") => {
    const { movies, listMovies, sortColumn } = this.state;
    let path;
    let order;
    if (column === sortColumn.path) {
      path = sortColumn.path;
      order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      path = column === "" ? "title" : column;
      order = "asc";
    }

    const m = _.orderBy(movies, [path], [order]);
    const l = _.orderBy(listMovies, [path], [order]);
    const s = { path, order };

    this.setState({ movies: m, listMovies: l, sortColumn: s });
  };

  render() {
    const {
      genres,
      listMovies,
      query,
      currentPage,
      itemPerPage,
      currentGenre,
      sortColumn
    } = this.state;

    const itemCount = listMovies.length;
    const filterMovies = _.chunk(listMovies, itemPerPage)[currentPage];

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              data={genres}
              currentItem={currentGenre}
              onClick={this.handleGenreChange}
            />
          </div>
          <div className="col-9">
            <button className="btn btn-primary mb-4">New Movie</button>
            <p className="mb-4">
              Showing {listMovies.length} movies in the database.
            </p>
            <SearchBox onChange={this.handleQueryChange} query={query} />
            <MovieTable
              movies={filterMovies}
              sortColumn={sortColumn}
              onClick={this.handleSort}
            />
            <Pagination
              currentPage={currentPage}
              itemPerPage={itemPerPage}
              itemCount={itemCount}
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
