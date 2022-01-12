import React from "react";
import * as Styled from "./TableItemStyles";

import moreVertical from "media/more-vertical.svg";
import moment from "moment";

type TableItemProps = {
  firstName: string;
  lastName: string;
  resolution: string;
  visitDate: string;
  nextVisit: string;
};

const TableItem = ({
  firstName,
  lastName,
  resolution,
  visitDate,
  nextVisit,
}: TableItemProps) => {
  const actions = () => {};

  const formatDate = (date: string) => {
    return moment(date).format("MM/DD/YY");
  };

  return (
    <Styled.Tr>
      <Styled.Td>{firstName}</Styled.Td>
      <Styled.Td>{lastName}</Styled.Td>
      <Styled.ResolutionTd>{resolution}</Styled.ResolutionTd>
      <Styled.DateTd>{formatDate(visitDate)}</Styled.DateTd>
      <Styled.DateTd>{formatDate(nextVisit)}</Styled.DateTd>
      <Styled.MoreTd onClick={actions}>
        <Styled.ImgWrapper>
          <img src={moreVertical} alt="more vertical svg" />
        </Styled.ImgWrapper>
      </Styled.MoreTd>
    </Styled.Tr>
  );
};

export default TableItem;
