import React from "react";
import { v4 as uuidv4 } from "uuid";
import angleLeft from "media/angle-left-b.svg";
import angleRight from "media/angle-right.svg";

const Pagination = ({
  total,
  perPage,
  currentPage,
  onClick,
}: {
  total: number;
  perPage: number;
  currentPage: number;
  onClick: (number: number) => void;
}) => {
  const pages = Math.ceil(total / perPage);
  return (
    <div>
      <button
        onClick={() => onClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={angleLeft} alt="arrow left" />
      </button>
      <div>
        {[...Array(pages)].map((el, i) => {
          const pageNumber = i + 1;
          const disabled = pageNumber === currentPage;
          return (
            <button
              type="button"
              key={uuidv4()}
              onClick={() => onClick(pageNumber)}
              disabled={disabled}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onClick(currentPage + 1)}
        disabled={currentPage === pages}
      >
        <img src={angleRight} alt="arrow right" />
      </button>
    </div>
  );
};

export default Pagination;
