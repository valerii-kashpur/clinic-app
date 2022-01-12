import styled from "styled-components";

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
  height: 64px;
  min-width: 190px;
  padding: 0 40px;
  text-align: start;

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontStyleNormal};
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};
  font-size: ${({ theme }) => theme.fonts.fontSize15};
  font-family: ${({ theme }) => theme.fonts.lineHeight160};
  align-items: center;

  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const AngleSpan = styled.span`
  background-image: url("media/angle-down.svg");
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextWrapper = styled.span`
  display: flex;
`;

export const MoreTh = styled(Th)`
  min-width: 24px;
  width: 24px;
`;
