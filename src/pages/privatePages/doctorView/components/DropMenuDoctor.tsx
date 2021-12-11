import React from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { deleteAppointment } from "network/fetchOperations";
import { fetchDoctorAppointments } from "redux/doctorAppointmentsSlice";
import { useAppDispatch } from "hooks/useAppDispatch";

type DropMenuDoctorProps = {
  menuBtn: any,
  id:string,
  visitDate:string,
  name:string,
  getModalProps:any,
  openModal:any,
}

const DropMenuDoctor = ({
  menuBtn,
  id,
  visitDate,
  name,
  getModalProps,
  openModal,
}: DropMenuDoctorProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    getModalProps({ name, id, visitDate });
    openModal();
  };

  const handleDelete = async () => {
    await deleteAppointment(id);
    dispatch(fetchDoctorAppointments("dateSort"));
  };

  return (
    <Menu menuButton={menuBtn} transition>
      <MenuItem onClick={handleClick}>Edit a resolution</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );
};

export default DropMenuDoctor;
