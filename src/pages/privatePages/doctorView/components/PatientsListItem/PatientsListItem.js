import React from "react";
import { v4 as uuidv4 } from "uuid";
import {styles} from "./PatientsListItemStyles";

// media --------------------------------------------------------------------------------------------
import moreVertical from "media/more-vertical.svg";

const {
  ListItem,
  ListItemInfoWrapper,
  ListItemInfoAvatar,
  ListItemInfoName,
  ListItemStatusWrapper,
  ListItemStatus,
  ListItemStatusAppointment,
  ListItemInfoText,
  ListItemMore,
} = styles;

const PatientsListItem = ({avatar, name, appointment, time, description}) => {
  return (
    <>
      <ListItem key={uuidv4()}>
        <ListItemInfoWrapper>
          <ListItemInfoAvatar src={avatar} alt="" />
          <div>
            <ListItemInfoName>{name}</ListItemInfoName>
            <ListItemStatusWrapper>
              <ListItemStatus />
              <ListItemStatusAppointment>
                {appointment}
              </ListItemStatusAppointment>
            </ListItemStatusWrapper>
          </div>
          <ListItemMore src={moreVertical} alt="" />
        </ListItemInfoWrapper>
        <ListItemInfoText>{time}</ListItemInfoText>
        <ListItemInfoText description>{description}</ListItemInfoText>
      </ListItem>
    </>
  );
};

export default PatientsListItem;
