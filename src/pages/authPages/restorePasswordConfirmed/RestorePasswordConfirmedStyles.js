import styled from "styled-components";

const NotificationText = styled.p`
  min-width: 256px;
  margin: 0;
  margin-bottom: 24px;

  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${(props) => props.theme.fonts.fontStyle};

  color: ${(props) => props.theme.colors.secondaryTextColor};

  @media ${(props) => props.theme.media.tablet} {
    width: 368px;
  } ;
`;

const EmailLInk = styled.a`
  font-weight: ${(props) => props.theme.fonts.boldFontWeight};
  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 130%;
  text-decoration: underline;

  color: ${(props) => props.theme.colors.accentColor};
`;

export const styles = {
  NotificationText,
  EmailLInk,
};
