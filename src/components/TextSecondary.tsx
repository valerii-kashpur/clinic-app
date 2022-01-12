import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};
  font-size: ${({ theme }) => theme.fonts.fontSize13};
  line-height: ${({ theme }) => theme.fonts.lineHeight130};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

type TextProps = {
  children: React.ReactNode;
};

const TextSecondary = ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};

export default TextSecondary;
