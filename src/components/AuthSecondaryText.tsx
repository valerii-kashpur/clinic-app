import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};
  font-size: ${({ theme }) => theme.fonts.fontSize15};
  line-height: ${({ theme }) => theme.fonts.lineHeight141};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

type TextProps = {
  children: React.ReactNode;
};

const AuthSecondaryText = ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};

export default AuthSecondaryText;
