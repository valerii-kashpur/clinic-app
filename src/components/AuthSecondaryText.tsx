import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 1.4;
  color: #a1abc9;
`;

type TextProps = {
  children: React.ReactNode;
};

const AuthSecondaryText = ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};

export default AuthSecondaryText;
