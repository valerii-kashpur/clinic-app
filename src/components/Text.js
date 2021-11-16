import React from "react";
import styled from "styled-components";

const DefaultText = styled.p`
  font-size: ${(props) => props.theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${(props) => props.theme.fonts.fontStyle};

  color: ${(props) => props.theme.colors.secondaryTextColor};
`;

const Text = ({ children, margin, padding }) => {
  return (
    <DefaultText margin={margin} padding={padding}>
      {children}
    </DefaultText>
  );
};

export default Text;
