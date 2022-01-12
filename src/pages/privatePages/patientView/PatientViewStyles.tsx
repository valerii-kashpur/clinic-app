import styled from "styled-components";
import { Link } from "react-router-dom";

// IMAGES
import emptyImg from "media/medical-history.png";

export const NavButtonsWrapper = styled.div`
  display: flex;
`;

type NavButtonProps = {
  current?: boolean | undefined;
};

export const NavButton = styled.button<NavButtonProps>`
  width: 120px;
  height: 40px;
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
    display: none;
  }

  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
  border: none;
  background: ${({ current, theme }) =>
    current ? theme.colors.accentColor : theme.colors.buttonTextColor};
  color: ${({ current, theme }) =>
    current ? theme.colors.buttonTextColor : theme.colors.accentColor};

  @media ${({ theme }) => theme.media.tablet} {
    width: 160px;

    &:last-of-type {
      display: block;
    }
  } ;
`;
export const NavigationWrapper = styled.div`
  margin-top: 40px;
  display: flex;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 56px;
    padding-right: ${({ theme }) => theme.borderRadius.borderRadius};
  } ;
`;
export const NavSectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize20};
  line-height: 110%;
`;
export const NavigationItemsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 40px;
`;
export const NavigationItemSelect = styled.img`
  width: 24px;
  height: 24px;

  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  } ;
`;
export const NavigationSelectSpan = styled.span`
  display: none;
  @media ${({ theme }) => theme.media.desktop} {
    display: block;
    margin-right: 16px;

    color: ${({ theme }) => theme.colors.secondaryTextColor};
  } ;
`;
export const NavigationSelectDesktop = styled.select`
  display: none;
  background: white;
  @media ${({ theme }) => theme.media.desktop} {
    display: block;

    color: ${({ theme }) => theme.colors.accentColor};
    border: none;
  } ;
`;
export const EmptyListBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 64vh;
  padding-bottom: 108px;
  text-align: center;

  background: url(${emptyImg}) no-repeat;
  background-position-x: center;
  background-position-y: 29%;
  background-size: 120px 120px;
`;
export const EmptyListText = styled.div`
  max-width: 461px;
`;
export const AppointmentCreateButton = styled(Link)`
  display: none;
  @media ${({ theme }) => theme.media.desktop} {
    width: 224px;
    height: 48px;
    margin-left: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
    background: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.buttonTextColor};
  } ;
`;
