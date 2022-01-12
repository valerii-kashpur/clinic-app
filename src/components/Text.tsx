import React from "react";
import styled from "styled-components";

const DefaultText = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize15};
  line-height: ${({ theme }) => theme.fonts.lineHeight141};
  font-weight: ${({ theme }) => theme.fonts.fontWeightNormal};

  color: ${({ theme }) => theme.colors.baseColor}; ;
`;

type TextProps = {
  children: React.ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <DefaultText>{children}</DefaultText>;
};

export default Text;
