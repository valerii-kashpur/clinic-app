import React from "react";
import styled from "styled-components";

const DefaultText = styled.p`
  font-size: 15px;
  line-height: 1.4;
  font-weight: normal;

  color: #202225;
`;

type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <DefaultText>{children}</DefaultText>;
};

export default Text;
