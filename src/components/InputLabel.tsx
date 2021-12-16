import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
  font-size: 13px;
  line-height: 1.3;

  color: #000000;
`;

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

const InputLabel = ({ children, htmlFor }: LabelProps) => {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default InputLabel;
