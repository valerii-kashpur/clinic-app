import React from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  deleteAppointment,
  getDoctorAppointment,
} from "network/fetchOperations";
import { useDispatch } from "react-redux";

const DropMenuDoctor = ({
  menuBtn,
  id,
  visitDate,
  name,
  getModalProps,
  openModal,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    getModalProps({ name, id, visitDate });
    openModal();
  };

  const handleDelete = async () => {
    await deleteAppointment(id);
    dispatch(getDoctorAppointment());
  };

  return (
    <Menu menuButton={menuBtn} transition>
      <MenuItem onClick={handleClick}>Edit a resolution</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );
};

export default DropMenuDoctor;
