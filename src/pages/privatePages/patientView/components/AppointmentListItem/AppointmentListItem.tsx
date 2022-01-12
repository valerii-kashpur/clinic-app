import React from "react";
import * as Styled from "./AppointmentListItemStyles";

// media
import moreVertical from "media/more-vertical.svg";
import CardName from "components/CardName";
import TextSecondary from "components/TextSecondary";

type AppointmentListItemProps = {
  avatar: string;
  name: string;
  profession: string;
  time: string;
  description: string;
};

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
          <CardName>{name}</CardName>
          <Styled.ListItemStatusWrapper>
            <TextSecondary>{profession}</TextSecondary>
          </Styled.ListItemStatusWrapper>
        </div>
        <Styled.ListItemMore src={moreVertical} alt="" />
      </Styled.ListItemInfoWrapper>
      <Styled.ListItemInfoText>{time}</Styled.ListItemInfoText>
      <Styled.ListItemInfoText description>
        {description}
      </Styled.ListItemInfoText>
    </Styled.ListItem>
  );
};

export default AppointmentListItem;
