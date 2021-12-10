import React from "react";
import Modal from "styled-react-modal";
import EditResolution from "./EditResolution/EditResolution";

const StyledModal = Modal.styled`
  width: 272px;
  padding: 4px 24px;
  background-color: white;

  position: o o;
`;

type ModalPropItems = {
  id?: string,
  name?: string,
  visitDate?: string,
}

type EditAppointmentModalProps = {
  isOpen: boolean,
  toggleModal: any,
  setDropMenuValue: any,
  modalPropItems?: ModalPropItems ,
}

const EditAppointmentModal = ({
  isOpen,
  toggleModal,
  setDropMenuValue,
  modalPropItems,
}: EditAppointmentModalProps) => {

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={() => {
        toggleModal();
        setDropMenuValue("");
      }}
      onEscapeKeydown={() => {
        toggleModal();
        setDropMenuValue("");
      }}
    >
      <EditResolution modalProps={modalPropItems} onToggleModal={toggleModal} />
    </StyledModal>
  );
};

export default EditAppointmentModal;
