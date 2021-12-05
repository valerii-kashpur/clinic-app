import React from "react";
import { styles } from "./AppointmentListItemStyles";

// media
import moreVertical from "media/more-vertical.svg";

const {
  ListItem,
  ListItemInfoWrapper,
  ListItemInfoAvatar,
  ListItemInfoName,
  ListItemStatusWrapper,
  ListItemStatusProffesion,
  ListItemMore,
  ListItemInfoText,
} = styles;

const AppointmentListItem = ({
  avatar,
  name,
  profession,
  time,
  description,
}) => {
  return (
    <ListItem data-testid="listItem">
      <ListItemInfoWrapper>
        <ListItemInfoAvatar src={avatar} alt="" />
        <div>
          <ListItemInfoName>{name}</ListItemInfoName>
          <ListItemStatusWrapper>
            <ListItemStatusProffesion>{profession}</ListItemStatusProffesion>
          </ListItemStatusWrapper>
        </div>
        <ListItemMore src={moreVertical} alt="" />
      </ListItemInfoWrapper>
      <ListItemInfoText>{time}</ListItemInfoText>
      <ListItemInfoText description>{description}</ListItemInfoText>
    </ListItem>
  );
};

export default AppointmentListItem;
