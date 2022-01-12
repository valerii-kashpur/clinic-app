import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Text = styled(Link)`
  font-weight: ${({ theme }) => theme.fonts.fontWeightBold};
  font-size: ${({ theme }) => theme.fonts.fontSize15};
  line-height: ${({ theme }) => theme.fonts.lineHeight130};
  color: ${({ theme }) => theme.colors.accentColor};
`;

type TextProps = {
  children: React.ReactNode;
  to: string;
};

const AuthLink = ({ children, to }: TextProps) => {
  return <Text to={to}>{children}</Text>;
};

export default AuthLink;
