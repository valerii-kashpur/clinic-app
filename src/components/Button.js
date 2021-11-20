import React from "react";
import styled from "styled-components";
import baseButtonStyles from "styles/baseButtonStyles";

const DefaultButton = styled(baseButtonStyles)``;

const Button = ({ children, margin, width, height, disabled }) => {
  return (
    <DefaultButton
      margin={margin}
      width={width}
      height={height}
      disabled={disabled}
    >
      {children}
    </DefaultButton>
  );
};

export default Button;
