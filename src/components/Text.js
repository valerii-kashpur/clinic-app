import React from "react";
import styled from "styled-components";

const DefaultText = styled.p`
  font-size: ${({theme}) => theme.fonts.mobileFontSize};
  line-height: 130%;
  font-weight: ${({theme}) => theme.fonts.fontStyle};

  color: ${({theme}) => theme.colors.secondaryTextColor};
`;

const Text = ({ children, margin, padding }) => {
  return (
    <DefaultText margin={margin} padding={padding}>
      {children}
    </DefaultText>
  );
};

export default Text;
