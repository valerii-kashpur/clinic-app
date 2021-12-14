import React, { ReactElement } from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useAppDispatch } from "types/useAppDispatch";
import { deleteResolution } from "network/fetchOperations";
import { fetchDoctorResolutions } from "redux/slices/doctorsResolutionsSlice";

type DropMenuResolutionProps = {
  menuButton: ReactElement;
  resolutionId: string;
  setModalProps: React.Dispatch<
    React.SetStateAction<{ id: string; firstName: string; lastName: string }>
  >;
  firstName: string;
  lastName: string;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropMenuResolution = ({
  menuButton,
  resolutionId,
  setModalProps,
  firstName,
  lastName,
  toggleModal,
}: DropMenuResolutionProps) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    setModalProps({ id: resolutionId, firstName, lastName });
    toggleModal(true);
  };

  const handleDelete = async () => {
    await deleteResolution(resolutionId);
    dispatch(fetchDoctorResolutions({ dateSort: "dateSort", currentPage: 1 }));
    toggleModal(false);
  };

  return (
    <Menu menuButton={menuButton} transition>
      <MenuItem onClick={handleEdit}>Edit a resolution</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );
};

export default DropMenuResolution;
