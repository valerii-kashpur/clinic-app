import React, { ReactElement } from "react";
import { MenuItem, Menu as MenuInner } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { menuSelector } from "@szhsin/react-menu/style-utils";
import { deleteAppointment } from "network/fetchOperations";
import { fetchDoctorAppointments } from "redux/slices/doctorAppointmentsSlice";
import { useAppDispatch } from "types/useAppDispatch";
import styled from "styled-components";

const Menu = styled(MenuInner)`
  ${menuSelector.name} {
    left: -205px !important;
  } ;
`;

type DropMenuDoctorProps = {
  menuBtn: ReactElement<string, string>;
  id: string;
  visitDate: string;
  name: string;
  getModalProps: ({
    name,
    id,
    visitDate,
  }: {
    name: string;
    id: string;
    visitDate: string;
  }) => void;
  toggleCreateResolutionModal: () => void;
};

const DropMenuDoctor = ({
  menuBtn,
  id,
  visitDate,
  name,
  getModalProps,
  toggleCreateResolutionModal,
}: DropMenuDoctorProps) => {
  const dispatch = useAppDispatch();

  const handleCreate = () => {
    getModalProps({ name, id, visitDate });
    toggleCreateResolutionModal();
  };

  const handleDelete = async () => {
    await deleteAppointment(id);
    dispatch(fetchDoctorAppointments("dateSort"));
  };

  return (
    <Menu menuButton={menuBtn} transition>
      <MenuItem onClick={handleCreate}>Create a resolution</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );
};

export default DropMenuDoctor;
