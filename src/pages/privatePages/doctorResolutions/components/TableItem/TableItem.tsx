import React from "react";
import moreVertical from "media/more-vertical.svg";

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
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{resolution}</td>
      <td>{visitDate}</td>
      <td>{nextVisit}</td>
      <td onClick={actions}>
        <img src={moreVertical} alt="more vertical svg" />
      </td>
    </tr>
  );
};

export default TableItem;
