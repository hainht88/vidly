import React from "react";
import _ from "lodash";

const Pagination = ({ itemPerPage, currentPage, itemCount, onClick }) => {
  const pages = _.range(0, Math.ceil(itemCount / itemPerPage));

  if (itemCount < itemPerPage) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onClick(page)}>
              {page + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
