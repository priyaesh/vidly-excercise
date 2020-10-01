import React, { Component } from "react";
import Proptypes from "prop-types";
import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import { paginate } from "../utils/paginate";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import { get } from "lodash";
import MoviesTable from "../common/moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genre: [],
    sortColumn: { path: "title", order: "asc" },
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genre = [{ _id: " ", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genre });
  }
  handleOnDelete = (movie) => {
    console.log("Button Clicked", movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };
  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;

    if (count === 0) return <p> There is no movies in the database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genre}
            selectedItem={this.state.selectedGenre}
            onItemSelected={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>There are {filtered.length} in the database</p>
          <MoviesTable
            movies={movies}
            onDelete={this.handleOnDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
