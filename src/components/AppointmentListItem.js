import React from "react";
import styled from "styled-components";

// media
import moreVertical from "../media/more-vertical.svg";
import timeSvg from "../media/clock-three.svg";
import reasonSvg from "../media/reason.svg";

const ListItem = styled.li`
  padding-left: 24px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 24px;
  height: 100%;

  background-color: #ffffff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    padding-bottom: 40px;
    min-width: 524px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 0;
    width: 406px;
  }
`;
const ListItemInfoWrapper = styled.div`
  position: relative;
  padding-bottom: 16px;

  display: flex;
  align-items: center;
  &::after {
    position: absolute;
    content: "";

    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;

    background: #dce0ec;
    opacity: 0.5;
  }
`;
const ListItemInfoAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;
const ListItemInfoName = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 130%;
`;
const ListItemStatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ListItemStatusProffesion = styled.p`
  font-size: 13px;
  line-height: 130%;
  color: #a1abc9;
`;
const ListItemMore = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;
const ListItemInfoText = styled.p`
  position: relative;
  margin-top: ${props => props.description ? "23px" : "16px"};
  padding-left: 36px;
  &::before {
    position: absolute;
    content: "";

    top: 0;
    left: 0;

    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${props => props.description ? reasonSvg : timeSvg});
  }
  @media screen and (min-width: 768px) {
    margin-top: ${props => props.description ? "24px" : "23px"};
  } ;
`;

const AppointmentListItem = ({avatar, name, profession, time, description}) => {
  return (
    <ListItem>
      <ListItemInfoWrapper>
        <ListItemInfoAvatar src={avatar} alt="" />
        <div>
          <ListItemInfoName>{name}</ListItemInfoName>
          <ListItemStatusWrapper>
            <ListItemStatusProffesion>
              {profession}
            </ListItemStatusProffesion>
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
