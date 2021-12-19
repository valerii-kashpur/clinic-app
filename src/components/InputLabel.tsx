import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-weight: ${({ theme }) => theme.fonts.fontWeightMedium};
  font-size: ${({ theme }) => theme.fonts.fontSize13};
  line-height: ${({ theme }) => theme.fonts.lineHeight130};

  color: ${({ theme }) => theme.colors.baseColor};
`;

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

const InputLabel = ({ children, htmlFor }: LabelProps) => {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default InputLabel;
