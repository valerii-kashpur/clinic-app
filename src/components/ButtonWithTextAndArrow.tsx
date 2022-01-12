import React from "react";
import styled from "styled-components";
import angleRight from "media/angle-right-b.svg";
import LoaderForButtons from "./LoaderForButtons";
import Button from "./Button";

type ButtonStyleProps = {
  width?: string;
  height?: string;
};

const ButtonWithArrow = styled(Button)<ButtonStyleProps>``;

const ButtonVector = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 8px;

  background: url(${angleRight});
  background-repeat: no-repeat;
`;

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: any;
  width?: string;
  height?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
};

const ButtonWithTextAndArrow = ({
  text,
  disabled,
  onClick,
  width,
  height,
  isLoading,
  type,
}: ButtonProps) => {
  return (
    <ButtonWithArrow
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
      type={type}
    >
      {isLoading ? (
        <LoaderForButtons />
      ) : (
        <>
          {text} <ButtonVector />
        </>
      )}
    </ButtonWithArrow>
  );
};

export default ButtonWithTextAndArrow;
