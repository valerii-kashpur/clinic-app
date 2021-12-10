import styled from "styled-components";

// IMAGES
import emptyImg from "media/medical-history.png";

export const NavButtonsWrapper = styled.div`
  display: flex;
`;

export const NavButton = styled.button`
  width: 120px;
  height: 40px;
  margin-right: 24px;

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
  } ;
`;

export const NavigationWrapper = styled.div`
  margin-top: 40px;
  display: flex;

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 56px;
    padding-right: ${(props) => props.theme.borderRadius.borderRadius};
  } ;
`;

export const NavSectionTitle = styled.h3`
  font-size: 24px;
  line-height: 110%;
`;

export const NavgationItemsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 40px;
`;

export const NavigationItemSearch = styled.img`
  margin-right: 24px;

  width: 24px;
  height: 24px;

  @media ${(props) => props.theme.media.tablet} {
    margin-right: 32px;
  }

  @media ${(props) => props.theme.media.desktop} {
    margin-right: 16px;
  }
`;

export const NavigationSearchInput = styled.input`
  display: none;

  @media ${(props) => props.theme.media.desktop} {
    display: block;
    border: none;
    width: 90px;
    margin-right: 10px;
    color: $secondary-text-color;
    &::placeholder {
      color: $secondary-text-color;
    }
  } ;
`;

export const NavigationItemSelect = styled.img`
  width: 24px;
  height: 24px;

  @media ${(props) => props.theme.media.desktop} {
    display: none;
  } ;
`;

export const NavigationSelectSpan = styled.span`
  display: none;

  @media ${(props) => props.theme.media.desktop} {
    display: block;
    margin-right: 16px;
    color: ${(props) => props.theme.colors.secondaryTextColor};
  } ;
`;

export const NavigationSelect = styled.select`
  display: none;

  @media ${(props) => props.theme.media.desktop} {
    display: block;
    color: ${(props) => props.theme.colors.accentColor};
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

export const EmptyListText = styled.p`
  max-width: 461px;

  font-weight: ${(props) => props.theme.fonts.boldFontWeight};
  line-height: 21px;

  color: ${(props) => props.theme.colors.secondaryTextColor};
`;

