import { IPatientsResolutions } from "models/IPatientsResolutions";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import TableHead from "../TableHead/TableHead";
import TableItem from "../TableItem/TableItem";
import * as Styled from "./ResolutionsTable.Styles";

type ResolutionsTableProps = {
  resolutions: IPatientsResolutions;
};

const ResolutionsTable = ({ resolutions }: ResolutionsTableProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Table>
        <TableHead />
        <tbody>
          {resolutions.map(
            ({ next_appointment_date, visit_date, resolution, doctor }) => {
              return (
                <TableItem
                  firstName={doctor.first_name}
                  lastName={doctor.last_name}
                  resolution={resolution}
                  visitDate={visit_date}
                  nextVisit={next_appointment_date}
                  key={uuidv4()}
                />
              );
            }
          )}
        </tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

export default ResolutionsTable;
