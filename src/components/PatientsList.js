import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

// MEDIA
import avatar from "../media/ZaharyAvatar.png";
import moreVertical from "../media/more-vertical.svg";
import timeSvg from "../media/clock-three.svg";
import clipboardSvg from "../media/clipboard-blank.svg";

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

const ListItemStatus = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  margin-right: 8px;

  border-radius: 50%;
  background-color: #34c197;
`;

const ListItemStatusAppoinment = styled.p`
  font-size: 13px;
  line-height: 130%;
  color: #a1abc9;
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
    background-image:url(${props => props.description ? clipboardSvg : timeSvg});
  }
  @media screen and (min-width: 768px) {
    margin-top: ${props => props.description ? "24px" : "23px"};
  } ;
`;

const ListItemMore = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

const PatientsList = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={uuidv4()}>
          <ListItemInfoWrapper>
            <ListItemInfoAvatar src={avatar} alt="" />
            <div>
              <ListItemInfoName>{user.name}</ListItemInfoName>
              <ListItemStatusWrapper>
                <ListItemStatus />
                <ListItemStatusAppoinment>
                  {user.appoinment}
                </ListItemStatusAppoinment>
              </ListItemStatusWrapper>
            </div>
            <ListItemMore src={moreVertical} alt="" />
          </ListItemInfoWrapper>
          <ListItemInfoText>{user.time}</ListItemInfoText>
          <ListItemInfoText description>{user.description}</ListItemInfoText>
        </ListItem>
      ))}
    </List>
  );
};

export default PatientsList;
