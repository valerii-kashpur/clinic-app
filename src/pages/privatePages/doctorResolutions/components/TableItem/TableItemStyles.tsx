import styled from "styled-components";

export const Tr = styled.tr``;
export const Td = styled.td`
  min-width: 280px;
  padding: 20px 40px;
  text-align: start;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 1.41;

  color: #202225;
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
