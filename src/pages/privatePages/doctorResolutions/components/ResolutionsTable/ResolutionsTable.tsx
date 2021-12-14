import { IDoctorResolutions } from "models/IDoctorResolutions";
import React from "react";
import TableItem from "../TableItem/TableItem";
import { v4 as uuidv4 } from "uuid";
import TableHead from "../TableHead/TableHead";

type ResolutionsTableProps = {
  resolutions: IDoctorResolutions;
};
//   nextVisit: next_appointment_date
//   visitDate: visit_date
//   resolution,
//   firstName: patient.first_name
//   lastName: patient.last_name

const ResolutionsTable = ({ resolutions }: ResolutionsTableProps) => {
  return (
    <table>
      <TableHead />
      <tbody>
        {resolutions.map(
          ({ next_appointment_date, visit_date, resolution, patient }) => {
            return (
              <TableItem
                firstName={patient.first_name}
                lastName={patient.last_name}
                resolution={resolution}
                visitDate={visit_date}
                nextVisit={next_appointment_date}
                key={uuidv4()}
              />
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default ResolutionsTable;
