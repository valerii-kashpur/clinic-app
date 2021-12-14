import React from "react";
import Modal from "styled-react-modal";
import CreateResolutionForm from "./CreateResolutionForm/CreateResolutionFrom";

const StyledModal = Modal.styled`
  width: 272px;
  padding: 4px 24px;
  background-color: white;

  position: o o;
`;

export type ModalPropItems = {
  id: string;
  name: string;
  visitDate: string;
};

type EditAppointmentModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  setDropMenuValue: React.Dispatch<
    React.SetStateAction<{ id: string; name: string; visitDate: string }>
  >;
  modalPropItems: ModalPropItems;
};

const CreateResolutionModal = ({
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
        setDropMenuValue({ id: "", name: "", visitDate: "" });
      }}
      onEscapeKeydown={() => {
        toggleModal();
        setDropMenuValue({ id: "", name: "", visitDate: "" });
      }}
    >
      <CreateResolutionForm
        modalProps={modalPropItems}
        onToggleModal={toggleModal}
      />
    </StyledModal>
  );
};

export default CreateResolutionModal;
