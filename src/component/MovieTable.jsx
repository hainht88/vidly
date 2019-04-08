import React, { Component } from "react";

class MovieTable extends Component {
  raiseSort(column) {
    this.props.onClick(column);
    this.setState({ column });
  }

  renderSortIcon(column) {
    const { sortColumn } = this.props;
    if (column === sortColumn.path)
      return sortColumn.order === "asc" ? (
        <i className="fa fa-sort-asc" />
      ) : (
        <i className="fa fa-sort-desc" />
      );
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")}>
                Title {this.renderSortIcon("title")}
              </th>
              <th onClick={() => this.raiseSort("genre.name")}>
                Genre {this.renderSortIcon("genre.name")}
              </th>
              <th onClick={() => this.raiseSort("numberInStock")}>
                Stock {this.renderSortIcon("numberInStock")}
              </th>
              <th onClick={() => this.raiseSort("dailyRentalRate")}>
                Rate {this.renderSortIcon("dailyRentalRate")}
              </th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map(m => (
                <tr key={m._id}>
                  <td>{m.title}</td>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <i className="fa fa-heart-o clickable" />
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieTable;
