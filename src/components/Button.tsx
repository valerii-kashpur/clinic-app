import LoaderForButtons from "components/LoaderForButtons";
import React from "react";
import styled from "styled-components";

type BaseButtonStylesType = {
  width?: string;
  height?: string;
  altStyle?: boolean;
};

const BaseButtonStyles = styled.button<BaseButtonStylesType>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};

  border-radius: ${({ theme }) => theme.borderRadius.borderRadius};
  border: none;

  background-color: #7297ff;
  color: #ffffff;
  cursor: pointer;

  font-weight: ${({ theme }) => theme.fonts.boldFontWeight};
  font-size: 15px;
  line-height: 1.3;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 17px;
    line-height: 1.41;
  }

  &:hover,
  &:focus {
    background-color: #476cd3;
    color: #ffffff;
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
    };

    &:disabled{
      background: #DCE0EC;
      color: #FFFFFF;
    }
  `}
`;

type ButtonProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: any;
  altStyle?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  width,
  height,
  disabled,
  altStyle,
  onClick,
  isLoading,
  type,
}: ButtonProps) => {
  return (
    <BaseButtonStyles
      type={type}
      width={width}
      height={height}
      disabled={disabled}
      altStyle={altStyle}
      onClick={onClick}
    >
      {isLoading ? <LoaderForButtons /> : <>{children}</>}
    </BaseButtonStyles>
  );
};

export default Button;
