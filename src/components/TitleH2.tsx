import React from "react";
import styled from "styled-components";

type TitleH2Props = {
  children: string;
};

const Title = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #202225;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

const TitleH2 = ({ children }: TitleH2Props) => {
  return <Title>{children}</Title>;
};

export default TitleH2;
