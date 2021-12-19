import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import styled from "styled-components";
import * as Styled from "../DoctorViewStyles";

import PatientsListItem from "./PatientsListItem/PatientsListItem";
import { IDoctorAppointment } from "models/IDoctorAppointments";
import EditCreateModal from "components/Modal/EditCreateModal";
import CreateResolutionForm from "./CreateResolutionForm/CreateResolutionFrom";
import TextSecondary from "components/TextSecondary";

const List = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px 20px;
  overflow: auto;

  @media ${({ theme }) => theme.media.tablet} {
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
      background: ${({ theme }) =>
        theme.colors.viewPagesContainerBackgroundColor};
      opacity: 0.32;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
    }
    &::-webkit-scrollbar-thumb {
      width: 12px;
      background: ${({ theme }) => theme.colors.inputBorderColor};
      opacity: 0.56;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
    }
  } ;
`;

type appointmentsArray = {
  appointmentsArray: IDoctorAppointment;
};

const PatientsList = ({ appointmentsArray }: appointmentsArray) => {
  const [modalPropItems, setModalPropItems] = useState({
    id: "",
    name: "",
    visitDate: "",
  });
  const [isCreateResolutionModalOpen, setIsCreateResolutionModalOpen] =
    useState(false);

  const toggleModal = () => {
    setIsCreateResolutionModalOpen(!isCreateResolutionModalOpen);
  };

  const clearModalProperties = () => {
    setModalPropItems({
      id: "",
      name: "",
      visitDate: "",
    });
  };

  return (
    <>
      {appointmentsArray.length ? (
        <List>
          {appointmentsArray.map(
            ({ patient, reason, status, visit_date, id }) => {
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
                  setModalProps={setModalPropItems}
                  toggleCreateResolutionModal={toggleModal}
                />
              );
            }
          )}
        </List>
      ) : (
        <Styled.EmptyListBlock>
          <Styled.EmptyListText data-testid="emptyList">
            <TextSecondary>
              You have no patients yet. To create a patient profile, please
              contact your administrator.
            </TextSecondary>
          </Styled.EmptyListText>
        </Styled.EmptyListBlock>
      )}
      <EditCreateModal
        isOpen={isCreateResolutionModalOpen}
        toggleModal={setIsCreateResolutionModalOpen}
        clearModalProperties={clearModalProperties}
      >
        <CreateResolutionForm
          modalProps={modalPropItems}
          toggleModal={setIsCreateResolutionModalOpen}
        />
      </EditCreateModal>
    </>
  );
};

export default PatientsList;
