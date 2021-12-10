import React from "react";
import * as Styled from "./AppointmentListItemStyles";

// media
import moreVertical from "media/more-vertical.svg";

type AppointmentListItemProps = {
  avatar: string,
  name: string,
  profession: string,
  time: string,
  description: string,
}

const AppointmentListItem = ({
  avatar,
  name,
  profession,
  time,
  description,
}: AppointmentListItemProps) => {
  return (
    <Styled.ListItem data-testid="listItem">
      <Styled.ListItemInfoWrapper>
        <Styled.ListItemInfoAvatar src={avatar} alt="" />
        <div>
          <Styled.ListItemInfoName>{name}</Styled.ListItemInfoName>
          <Styled.ListItemStatusWrapper>
            <Styled.ListItemStatusProfession>{profession}</Styled.ListItemStatusProfession>
          </Styled.ListItemStatusWrapper>
        </div>
        <Styled.ListItemMore src={moreVertical} alt="" />
      </Styled.ListItemInfoWrapper>
      <Styled.ListItemInfoText>{time}</Styled.ListItemInfoText>
      <Styled.ListItemInfoText description>{description}</Styled.ListItemInfoText>
    </Styled.ListItem>
  );
};

export default AppointmentListItem;
