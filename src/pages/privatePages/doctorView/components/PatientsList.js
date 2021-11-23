import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import styled from "styled-components";

import PatientsListItem from "./PatientsListItem/PatientsListItem";
import EditAppointmentModal from "./EditAppointmentModal";

//  Styles ---------------------------------------------------------------------------------------------

const List = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px 20px;
  overflow: auto;

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 42px;
    padding-bottom: 24px;
    min-height: 400px;
    max-height: calc(100% - 200px);
    flex-direction: row;
    flex-wrap: wrap;

    /* scrollbar */

    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: ${(props) =>
        props.theme.colors.viewPagesContainerBackgroundColor};
      opacity: 0.32;
      border-radius: ${(props) => props.theme.borderRadius.borderRadius};
    }
    &::-webkit-scrollbar-thumb {
      width: 12px;
      background: ${(props) => props.theme.colors.asideInputBorderColor};
      opacity: 0.56;
      border-radius: ${(props) => props.theme.borderRadius.borderRadius};
    }
  } ;
`;

//  ---------------------------------------------------------------------------------------------

const PatientsList = ({ appointments }) => {
  const [modalPropItems, setModalPropItems] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <List>
        {appointments.map(({ patient, reason, status, visit_date, id }) => {
          const date = moment(visit_date).format("ddd MMM DD YYYY, h a");
          return (
            <PatientsListItem
              key={uuidv4()}
              avatar={patient.photo}
              name={patient.first_name + " " + patient.last_name}
              appointment={status}
              time={date}
              description={reason}
              id={id}
              visitDate={visit_date}
              getModalProps={setModalPropItems}
              openModal={toggleModal}
            />
          );
        })}
      </List>
      <EditAppointmentModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalPropItems={modalPropItems}
      />
    </>
  );
};

export default PatientsList;
