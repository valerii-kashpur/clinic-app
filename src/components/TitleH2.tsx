import React from "react";
import styled from "styled-components";

type TitleH2Props = {
  children: string;
};

const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.fontStyleNormal};
  font-weight: ${({ theme }) => theme.fonts.fontWeightBold};
  font-size: ${({ theme }) => theme.fonts.fontSize20};
  line-height: ${({ theme }) => theme.fonts.lineHeight120};
  color: ${({ theme }) => theme.colors.baseColor};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.fontSize20};
    line-height: ${({ theme }) => theme.fonts.lineHeight110};
  }
`;

const TitleH2 = ({ children }: TitleH2Props) => {
  return <Title>{children}</Title>;
};

export default TitleH2;
