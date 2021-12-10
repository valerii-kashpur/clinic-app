import styled from "styled-components";

const NotificationText = styled.p`
  min-width: 256px;
  margin: 0;
  margin-bottom: 24px;

  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${({theme}) => theme.fonts.fontStyle};

  color: ${({theme}) => theme.colors.secondaryTextColor};

  @media ${({theme}) => theme.media.tablet} {
    width: 368px;
  } ;
`;

const EmailLInk = styled.a`
  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 130%;
  text-decoration: underline;

  color: ${({theme}) => theme.colors.accentColor};
`;

export const styles = {
  NotificationText,
  EmailLInk,
};
