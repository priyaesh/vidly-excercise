import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemCount / pageSize);

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
