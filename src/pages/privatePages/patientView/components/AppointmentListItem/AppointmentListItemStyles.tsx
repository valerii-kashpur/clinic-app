import styled from "styled-components";

// media
import timeSvg from "media/clock-three.svg";
import reasonSvg from "media/reason.svg";

export const ListItem = styled.li`
  padding-left: 24px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 24px;
  height: 100%;

  background-color: ${({theme}) => theme.colors.inputBackgroundColor};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;

  @media ${({theme}) => theme.media.tablet} {
    padding: 24px 32px;
    padding-bottom: 40px;
    min-width: 524px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 0;
    width: 406px;
  }
`;
export const ListItemInfoWrapper = styled.div`
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

    background: ${({theme}) => theme.colors.asideInputBorderColor};
    opacity: 0.5;
  }
`;
export const ListItemInfoAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;
export const ListItemInfoName = styled.p`
  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: 17px;
  line-height: 130%;
`;
export const ListItemStatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ListItemStatusProfession = styled.p`
  font-size: 13px;
  line-height: 130%;
  color: ${({theme}) => theme.colors.secondaryTextColor};
`;
export const ListItemMore = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

type ListItemInfoTextProps = {
  description?: boolean | undefined
}

export const ListItemInfoText = styled.p<ListItemInfoTextProps>`
  position: relative;
  margin-top: ${({description}) => (description ? "23px" : "16px")};
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
    background-image: url(${({description}) =>
      description ? reasonSvg : timeSvg});
  }
  @media ${({theme}) => theme.media.tablet} {
    margin-top: ${({description}) => (description ? "24px" : "23px")};
  } ;
`;
