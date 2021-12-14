import { IDoctorResolutions } from "models/IDoctorResolutions";
import React, { useState } from "react";
import TableItem from "../TableItem/TableItem";
import { v4 as uuidv4 } from "uuid";
import TableHead from "../TableHead/TableHead";
import EditCreateModal from "components/Modal/EditCreateModal";
import EditResolutionForm from "../EditResolutionForm/EditResolutionForm";

type ResolutionsTableProps = {
  resolutions: IDoctorResolutions;
};

const ResolutionsTable = ({ resolutions }: ResolutionsTableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormProps, setModalFormProps] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  const clearModalProperties = () => {
    setModalFormProps({
      id: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <>
      <table>
        <TableHead />
        <tbody>
          {resolutions.map(
            ({
              next_appointment_date,
              visit_date,
              resolution,
              patient,
              id,
            }) => {
              return (
                <TableItem
                  firstName={patient.first_name}
                  lastName={patient.last_name}
                  resolution={resolution}
                  visitDate={visit_date}
                  nextVisit={next_appointment_date}
                  resolutionId={id}
                  setModalProps={setModalFormProps}
                  toggleModal={setIsModalOpen}
                  key={uuidv4()}
                />
              );
            }
          )}
        </tbody>
      </table>
      <EditCreateModal
        isOpen={isModalOpen}
        toggleModal={setIsModalOpen}
        clearModalProperties={clearModalProperties}
      >
        <div>
          <EditResolutionForm
            toggleModal={setIsModalOpen}
            modalFormProps={modalFormProps}
          />
        </div>
      </EditCreateModal>
    </>
  );
};

export default ResolutionsTable;
