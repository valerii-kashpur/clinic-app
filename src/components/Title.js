import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-weight: ${({theme}) => theme.fonts.boldFontWeight};
  font-size: 20px;
  line-height: 24px;
  margin: ${(props) => props.margin};

  @media ${({theme}) => theme.media.tablet} {
    font-size: 24px;
    line-height: 26px;
  } ;
`;

const Title = ({children, marginProp}) => {
  return <StyledTitle margin={marginProp}>{children}</StyledTitle>;
};

export default Title;
