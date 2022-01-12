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

  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.buttonTextColor};
  cursor: pointer;

  font-weight: ${({ theme }) => theme.fonts.fontWeightBold};
  font-size: ${({ theme }) => theme.fonts.fontSize15};
  line-height: ${({ theme }) => theme.fonts.lineHeight130};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.fontSize17};
    line-height: ${({ theme }) => theme.fonts.lineHeight141};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledButtonColor};
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
