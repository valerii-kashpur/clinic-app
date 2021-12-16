import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 1.3;
  color: #a1abc9;
`;

type TextProps = {
  children: React.ReactNode;
};

const TextSecondary = ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};

export default TextSecondary;
