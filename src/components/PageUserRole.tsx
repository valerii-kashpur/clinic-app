import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.3;
  color: #a1abc9;
`;

type TextProps = {
  children: React.ReactNode;
};

const PageUserRole = ({ children }: TextProps) => {
  return <Text>{children}</Text>;
};

export default PageUserRole;
