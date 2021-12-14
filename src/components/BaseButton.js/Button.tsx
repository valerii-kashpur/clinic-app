import React from "react";
import styled from "styled-components";

type BaseButtonStylesType = {
  margin: string, width: string, height: string,
}

const BaseButtonStyles = styled.button<BaseButtonStylesType>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
  border: none;

  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.inputBackgroundColor};

  font-weight: ${({ theme }) => theme.fonts.boldFontWeight};
  font-size: ${({ theme }) => theme.fonts.mobileFontSize};
  line-height: 19px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 17px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: #476cd3;
  }

  &:disabled {
    background-color: #dce0ec;
  }
`;

type ButtonProps = {
  children: React.ReactNode, margin: string, width: string, height: string, disabled?: boolean, type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, margin, width, height, disabled, type }: ButtonProps) => {
  return (
    <BaseButtonStyles type={type} margin={margin} width={width} height={height} disabled={disabled}>
      {children}
    </BaseButtonStyles>
  );
};

export default Button;
