import styled from "styled-components";

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
  height: 64px;
  min-width: 190px;
  padding: 0 40px;
  text-align: start;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 1.6;
  align-items: center;

  color: #a1abc9;
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
