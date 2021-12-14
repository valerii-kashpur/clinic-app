import React from "react";
import Modal from "styled-react-modal";

const StyledModal = Modal.styled`
  width: 272px;
  padding: 4px 24px;
  background-color: white;

  position: o o;
`;

type ModalProps = {
  isOpen: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  clearModalProperties: () => void;
  children: React.ReactNode;
};

const EditCreateModal = ({
  isOpen,
  toggleModal,
  clearModalProperties,
  children,
}: ModalProps) => {
  const closeModal = () => {
    toggleModal(false);
    clearModalProperties();
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      {children}
    </StyledModal>
  );
};

export default EditCreateModal;
