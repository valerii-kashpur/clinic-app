import React from "react";
import moreVertical from "media/more-vertical.svg";
import DropMenuResolution from "../DropMenuResolution/DropMenuResolution";

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
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{resolution}</td>
      <td>{visitDate}</td>
      <td>{nextVisit}</td>
      <td onClick={actions}>
        <DropMenuResolution
          menuButton={<img src={moreVertical} alt="more vertical svg" />}
          resolutionId={resolutionId}
          firstName={firstName}
          lastName={lastName}
          setModalProps={setModalProps}
          toggleModal={toggleModal}
        />
      </td>
    </tr>
  );
};

export default TableItem;
