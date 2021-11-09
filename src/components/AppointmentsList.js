import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
// MEDIA
import avatar from "../media/doctorItemAvatar.png";
import AppointmentListItem from "./AppointmentListItem";

const List = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px 20px;
  overflow: auto;

  @media screen and (min-width: 768px) {
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
      background: #e4ebff;
      opacity: 0.32;
      border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
      width: 12px;
      background: #dce0ec;
      opacity: 0.56;
      border-radius: 8px;
    }
  } ;
`;

const AppointmentsList = ({ appointments }) => {
  return (
    <List>
      {appointments.map((user) => (
        <AppointmentListItem
          key={uuidv4()}
          avatar={avatar}
          name={user.name}
          profession={user.profession}
          time={user.time}
          description={user.description}
        />
      ))}
    </List>
  );
};

export default AppointmentsList;
