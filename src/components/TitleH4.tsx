import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-weight: ${({ theme }) => theme.fonts.fontWeightMedium};
  font-size: ${({ theme }) => theme.fonts.fontSize17};
  line-height: ${({ theme }) => theme.fonts.lineHeight141};

  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

type TextProps = {
  children: React.ReactNode;
};

const TitleH4 = ({ children }: TextProps) => {
  return <Title>{children}</Title>;
};

export default TitleH4;
