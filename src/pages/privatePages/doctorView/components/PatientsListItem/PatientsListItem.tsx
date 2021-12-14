import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as Styled from "./PatientsListItemStyles";
import moreVertical from "media/more-vertical.svg";
import DropMenuDoctor from "../DropMenuDoctor";

type PatientsListItemProps = {
  avatar: string;
  name: string;
  appointment: string;
  time: string;
  description: string;
  id: string;
  visitDate: string;
  setModalProps: React.Dispatch<
    React.SetStateAction<{ id: string; name: string; visitDate: string }>
  >;
  toggleCreateResolutionModal: () => void;
};

const PatientsListItem = ({
  avatar,
  name,
  appointment,
  time,
  description,
  id,
  visitDate,
  setModalProps,
  toggleCreateResolutionModal,
}: PatientsListItemProps) => {
  return (
    <>
      <Styled.ListItem key={uuidv4()} data-testid="listItem">
        <Styled.ListItemInfoWrapper>
          <Styled.ListItemInfoAvatar src={avatar} alt="user avatar" />
          <div>
            <Styled.ListItemInfoName>{name}</Styled.ListItemInfoName>
            <Styled.ListItemStatusWrapper>
              <Styled.ListItemStatus />
              <Styled.ListItemStatusAppointment>
                {appointment}
              </Styled.ListItemStatusAppointment>
            </Styled.ListItemStatusWrapper>
          </div>
          <DropMenuDoctor
            menuBtn={<Styled.ListItemMore src={moreVertical} alt="drop menu" />}
            id={id}
            visitDate={visitDate}
            name={name}
            getModalProps={setModalProps}
            toggleCreateResolutionModal={toggleCreateResolutionModal}
          />
        </Styled.ListItemInfoWrapper>
        <Styled.ListItemInfoText>{time}</Styled.ListItemInfoText>
        <Styled.ListItemInfoText description>
          {description}
        </Styled.ListItemInfoText>
      </Styled.ListItem>
    </>
  );
};

export default PatientsListItem;
