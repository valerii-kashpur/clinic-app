import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  min-width: 280px;
  padding: 20px 40px;
  text-align: start;

  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.fontStyleNormal};
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};
  font-size: ${({ theme }) => theme.fonts.fontSize17};
  line-height: ${({ theme }) => theme.fonts.lineHeight141};

  color: ${({ theme }) => theme.colors.baseColor};

  box-sizing: border-box;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 4px;
  border-top: ${({ theme }) => theme.inputsBorders.asideInputBorder};
`;
export const ResolutionTd = styled(Td)`
  min-width: 590px;
`;
export const DateTd = styled(Td)`
  min-width: 150px;
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const MoreTd = styled(Td)`
  min-width: 24px;
  width: 24px;
`;
