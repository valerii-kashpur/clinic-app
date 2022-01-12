import styled from "styled-components";

export const NotificationText = styled.div`
  min-width: 256px;
  margin: 0;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 368px;
  } ;
`;

export const EmailLInk = styled.a`
  font-weight: ${({ theme }) => theme.fonts.fontWeightBold};
  font-size: ${({ theme }) => theme.fonts.mobileFontSize};
  line-height: ${({ theme }) => theme.fonts.lineHeight130};
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.accentColor};
`;
