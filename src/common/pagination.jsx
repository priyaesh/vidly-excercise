import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize } = props;

  const pagesCount = Math.ceil(itemCount / pageSize);
  console.log(pagesCount);

  const pages = _.range(1, pagesCount + 1);
  console.log(pages);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
