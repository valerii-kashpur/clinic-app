import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-weight: 500;
  font-size: 17px;
  line-height: 1.41;

  color: #a1abc9;
`;

type TextProps = {
  children: React.ReactNode;
};

const TitleH4 = ({ children }: TextProps) => {
  return <Title>{children}</Title>;
};

export default TitleH4;
