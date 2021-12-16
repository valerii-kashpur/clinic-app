import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Text = styled(Link)`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
  color: #7297ff;
`;

type TextProps = {
  children: React.ReactNode;
  to: string;
};

const AuthLink = ({ children, to }: TextProps) => {
  return <Text to={to}>{children}</Text>;
};

export default AuthLink;
