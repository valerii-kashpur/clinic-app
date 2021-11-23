import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import styled from "styled-components";

// MEDIA
import AppointmentListItem from "./AppointmentListItem/AppointmentListItem";

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

const AppointmentsList = ({ appointments }) => {
  return (
    <List>
      {appointments.map(({ doctor, visit_date, reason }) => {
        const date = moment(visit_date).format("ddd MMM DD YYYY, h a");
        return (
          <AppointmentListItem
            key={uuidv4()}
            avatar={doctor.photo}
            name={doctor.first_name + " " + doctor.last_name}
            profession={doctor.specialization_name}
            time={date}
            description={reason}
          />
        );
      })}
    </List>
  );
};

export default AppointmentsList;
