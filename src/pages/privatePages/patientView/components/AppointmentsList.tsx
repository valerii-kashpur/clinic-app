import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import styled from "styled-components";
import * as Styled from "../PatientViewStyles";
import AppointmentListItem from "./AppointmentListItem/AppointmentListItem";
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

type AppointmentDoctor = {
  first_name: string;
  id: string;
  last_name: string;
  photo: string;
  specialization_name: string;
};

type Appointment = {
  doctor: AppointmentDoctor;
  doctor_id: string;
  id: string;
  note: string;
  patient_id: string;
  reason: string;
  status: string;
  visit_date: string;
};

type IPatientAppointment = Array<Appointment> | [];

type AppointmentsArray = {
  appointmentsArray: IPatientAppointment;
};

const AppointmentsList = ({ appointmentsArray }: AppointmentsArray) => {
  return appointmentsArray.length ? (
    <List>
      {appointmentsArray.map(({ doctor, visit_date, reason }) => {
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
  ) : (
    <Styled.EmptyListBlock>
      <Styled.EmptyListText>
        <TextSecondary data-testid="emptyList">
          You have no patients yet. To create a patient profile, please contact
          your administrator.
        </TextSecondary>
      </Styled.EmptyListText>
    </Styled.EmptyListBlock>
  );
};

export default AppointmentsList;
