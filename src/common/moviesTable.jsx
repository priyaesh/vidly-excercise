import React, { Component } from "react";

const MoviesTable = (props) => {
  const { movies, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.movies.map((movie) => (
          <tr key={movie._id}>
            <th>{movie.title}</th>
            <th>{movie.genre.name}</th>
            <th>{movie.numberInStock}</th>
            <th>{movie.dailyRentalRate}</th>
            <th>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
