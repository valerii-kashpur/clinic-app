import React from "react";
import styled from "styled-components";

type DefaultTextProps = {
  margin?: string, padding?: string
}

const DefaultText = styled.p<DefaultTextProps>`
  font-size: ${({ theme }) => theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${({ theme }) => theme.fonts.fontStyle};

  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin: ${({ margin }) => margin};
  margin: ${({ padding }) => padding};
`;

type TextProps = {
  children: React.ReactNode, margin?: string, padding?: string
}

const Text = ({ children, margin, padding }: TextProps) => {
  return (
    <DefaultText margin={margin} padding={padding}>
      {children}
    </DefaultText>
  );
};

export default Text;
