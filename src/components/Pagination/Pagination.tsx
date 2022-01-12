import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as Styled from "./PaginationStyles";

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
  const minNumberOfTotalOnPage = perPage * currentPage - perPage + 1;
  const pageStart = perPage * currentPage;
  const maxNumberOfTotalOnPage = Math.min(pageStart, total);
  return (
    <Styled.Wrapper>
      <Styled.ButtonsWrapper>
        <Styled.ResultsWrapper>
          <p>{`Results: ${minNumberOfTotalOnPage}-${maxNumberOfTotalOnPage} of ${total}`}</p>
        </Styled.ResultsWrapper>
        <Styled.ArrowButton
          onClick={() => onClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={angleLeft} alt="arrow left" />
        </Styled.ArrowButton>
        <Styled.PagesButtonWrapper>
          {[...Array(pages)].map((el, i) => {
            const pageNumber = i + 1;
            const disabled = pageNumber === currentPage;
            return (
              <Styled.BaseButton
                type="button"
                key={uuidv4()}
                onClick={() => onClick(pageNumber)}
                disabled={disabled}
              >
                {pageNumber}
              </Styled.BaseButton>
            );
          })}
        </Styled.PagesButtonWrapper>
        <Styled.ArrowButton
          onClick={() => onClick(currentPage + 1)}
          disabled={currentPage === pages}
        >
          <img src={angleRight} alt="arrow right" />
        </Styled.ArrowButton>
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};

export default Pagination;
