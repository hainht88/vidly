import React, { Component } from "react";
import { Link } from "react-router-dom";
import _chunk from "lodash/chunk";
import Pagination from "./common/Pagination";

export default class MovieTable extends Component {
  renderOrder = column => {
    if (this.props.sortBy.column === column) {
      return this.props.sortBy.order === "asc" ? (
        <i className="fa fa-sort-asc" />
      ) : (
        <i className="fa fa-sort-desc" />
      );
    }
  };
  render() {
    const {
      movies,
      currentPage,
      totalPage,
      handlePageChange,
      moviesPerPage,
      handleSort
    } = this.props;

    const page = _chunk(movies, moviesPerPage)[currentPage] || [];

    return (
      <div className="d-flex flex-column align-items-center col-6">
        <table className="table table-hover">
          <thead>
            <tr>
              <th onClick={() => handleSort("title")}>
                Title {this.renderOrder("title")}
              </th>
              <th onClick={() => handleSort("genre.name")}>
                Genre {this.renderOrder("genre.name")}
              </th>
              <th onClick={() => handleSort("numberInStock")}>
                Stock {this.renderOrder("numberInStock")}
              </th>
              <th onClick={() => handleSort("dailyRentalRate")}>
                Rate {this.renderOrder("dailyRentalRate")}
              </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {page.map(movie => (
              <tr key={movie._id}>
                <td>
                  <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <div className="btn-group d-flex">
                    <button className="btn btn-sm btn-primary">
                      <i className="fa fa-plus-circle" />
                    </button>
                    <button className="btn btn-sm btn-info">
                      <i className="fa fa-pencil-square-o" />
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash-o" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          moviesPerPage={moviesPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }
}
