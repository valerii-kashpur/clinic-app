import React from "react";
import styled from "styled-components";

type BaseButtonStylesType = {
  margin?: string;
  width?: string;
  height?: string;
  altStyle?: boolean;
};

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
    color: #dce0ec;
  }

  &:disabled {
    background-color: #dce0ec;
    color: #ffffff;
  }

  ${({ altStyle }) =>
    altStyle &&
    `
    background: #FFFFFF;
    color: #A1ABC9;

    &:hover,&:focus,&:active{
      background-color: #F9FAFF;
      color: #A1ABC9;
      cursor: pointer;
    };

    &:disabled{
      background: #DCE0EC;
      color: #FFFFFF;
    }
  `}
`;

type ButtonProps = {
  children: React.ReactNode;
  margin?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: any;
  altStyle?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({
  children,
  margin,
  width,
  height,
  disabled,
  altStyle,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <BaseButtonStyles
      type={type}
      margin={margin}
      width={width}
      height={height}
      disabled={disabled}
      altStyle={altStyle}
      onClick={onClick}
    >
      {children}
    </BaseButtonStyles>
  );
};

export default Button;
