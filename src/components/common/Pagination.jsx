import React from "react";

const pagination = ({
  currentPage,
  totalPage,
  moviesPerPage,
  onPageChange
}) => {
  return (
    <nav>
      {totalPage.length > moviesPerPage && (
        <ul className="pagination">
          <li className={`page-item ${currentPage === 0 && "disabled"}`}>
            <button
              onClick={() =>
                onPageChange(currentPage > 0 ? currentPage - 1 : 0)
              }
              className="page-link"
            >
              <i className="fa fa-chevron-left" />
            </button>
          </li>
          {totalPage.map(page => (
            <li
              key={page}
              className={`page-item ${currentPage === page && "active"}`}
            >
              <button onClick={() => onPageChange(page)} className="page-link">
                {page + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPage.length - 1 &&
              "disabled"}`}
          >
            <button
              onClick={() =>
                onPageChange(
                  currentPage < totalPage.length - 2
                    ? currentPage + 1
                    : totalPage.length - 1
                )
              }
              className="page-link"
            >
              <i className="fa fa-chevron-right" />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default pagination;
