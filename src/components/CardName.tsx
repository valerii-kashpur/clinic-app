import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: ${({ theme }) => theme.fonts.fontWeightBold};
  font-size: ${({ theme }) => theme.fonts.fontSize17};
  line-height: ${({ theme }) => theme.fonts.lineHeight130};
  color: ${({ theme }) => theme.colors.baseColor};
`;

type TextProps = {
  children: React.ReactNode;
};

const CardName = ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};

export default CardName;
