import React from "react";
import styled from "styled-components";
import angleRight from "media/angle-right-b.svg";
import LoaderForButtons from "./LoaderForButtons";

type ButtonStyleProps = {
  margin?: string;
  width?: string;
  height?: string;
  padding?: string;
  isLoading?: boolean;
};

const Button = styled.button<ButtonStyleProps>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
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

const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: ${({ theme }) => theme.borderRadius.borderRadius};

  background: url(${angleRight});
  background-repeat: no-repeat;
`;

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: any;
  width: string;
  height: string;
  margin?: string;
  padding?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
};

const ButtonWithTextAndArrow = ({
  text,
  disabled,
  onClick,
  width,
  height,
  margin,
  padding,
  isLoading,
  type,
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      type={type}
    >
      {isLoading ? (
        <LoaderForButtons />
      ) : (
        <>
          {text} <ButtonVector />
        </>
      )}
    </Button>
  );
};

export default ButtonWithTextAndArrow;
