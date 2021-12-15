import React from "react";
import * as Styled from "./TableItemStyles";

import moreVertical from "media/more-vertical.svg";
import DropMenuResolution from "../DropMenuResolution/DropMenuResolution";
import moment from "moment";

type TableItemProps = {
  firstName: string;
  lastName: string;
  resolution: string;
  visitDate: string;
  nextVisit: string;
  resolutionId: string;
  setModalProps: React.Dispatch<
    React.SetStateAction<{ id: string; firstName: string; lastName: string }>
  >;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TableItem = ({
  firstName,
  lastName,
  resolution,
  visitDate,
  nextVisit,
  resolutionId,
  setModalProps,
  toggleModal,
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
          <DropMenuResolution
            menuButton={<img src={moreVertical} alt="more vertical svg" />}
            resolutionId={resolutionId}
            firstName={firstName}
            lastName={lastName}
            setModalProps={setModalProps}
            toggleModal={toggleModal}
          />
        </Styled.ImgWrapper>
      </Styled.MoreTd>
    </Styled.Tr>
  );
};

export default TableItem;
