import styled from "styled-components";

// IMAGES
import emptyImg from "media/medical-history.png";

const NavButtonsWrapper = styled.div`
  display: flex;
`;
const NavButton = styled.button`
  width: 120px;
  height: 40px;
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
    display: none;
  }

  border-radius: ${(props) => props.theme.borderRadius.borderRadius};
  border: none;
  background: ${(props) =>
    props.current
      ? props.theme.colors.accentColor
      : props.theme.colors.buttonTextColor};
  color: ${(props) =>
    props.current
      ? props.theme.colors.buttonTextColor
      : props.theme.colors.accentColor};

  @media ${(props) => props.theme.media.tablet} {
    width: 160px;

    &:last-of-type {
      display: block;
    }
  } ;
`;
const NavigationWrapper = styled.div`
  margin-top: 40px;
  display: flex;

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 56px;
    padding-right: ${(props) => props.theme.borderRadius.borderRadius};
  } ;
`;
const NavSectionTitle = styled.h3`
  font-size: 24px;
  line-height: 110%;
`;
const NavgationItemsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 40px;
`;
const NavigationItemSelect = styled.img`
  width: 24px;
  height: 24px;

  @media ${(props) => props.theme.media.desktop} {
    display: none;
  } ;
`;
const NavigationSelectSpan = styled.span`
  display: none;
  @media ${(props) => props.theme.media.desktop} {
    display: block;
    margin-right: 16px;

    color: ${(props) => props.theme.colors.secondaryTextColor};
  } ;
`;
const NavigationSelectDesktop = styled.select`
  display: none;
  @media ${(props) => props.theme.media.desktop} {
    display: block;

    color: ${(props) => props.theme.colors.accentColor};
    border: none;
  } ;
`;
const EmptyListBlock = styled.div`
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
const EmptyListText = styled.p`
  max-width: 461px;

  font-weight: ${(props) => props.theme.fonts.boldFontWeight};
  line-height: 21px;

  color: ${(props) => props.theme.colors.secondaryTextColor};
`;
const UppointmentCreateButton = styled.button`
  display: none;
  @media ${(props) => props.theme.media.desktop} {
    width: 224px;
    height: 48px;
    margin-left: 64px;
    display: block;

    border: none;
    border-radius: ${(props) => props.theme.borderRadius.borderRadius};
    background: ${(props) => props.theme.colors.accentColor};
    color: white;
  } ;
`;

export const styles = {
  NavButtonsWrapper,
  NavButton,
  NavigationWrapper,
  NavSectionTitle,
  NavgationItemsWrapper,
  NavigationItemSelect,
  NavigationSelectSpan,
  NavigationSelectDesktop,
  EmptyListBlock,
  EmptyListText,
  UppointmentCreateButton,
};
